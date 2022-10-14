const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
export default async function handler(req, res) {

    const user_query = req.query.user;

    // Get cookies from request
    const cookies = req.headers.cookie;
    const fromClient = cookies.split(';').find(c => c.trim().startsWith('fromClient=')).split('=')[1];

    if (!user_query) {
        res.status(400).json({ error: 'Bad Request' });
        return;
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Delete all documents from the collection if user_query is fromClient

        if (fromClient == user_query) {
            
            // Delete all documents from the collection
            const delete_all = await collection.deleteMany({});

            // Create document with type: termination
            const termination = {
                type: "termination",
                timestamp: new Date().toISOString(),
            }
            
            const result2 = await collection.insertOne(termination).then(() => {
                // Redirect with status 200 and delete fromClient cookie
                res.setHeader('Set-Cookie', 'fromClient=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;');
                res.status(200).redirect('/account/terminateAccount?status=success&user=' + user_query);
            });
        }

        conn.close();

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}