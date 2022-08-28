const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default async function handler(req, res) {

    const user_query = req.query.user;
    const kurs = req.query.kurs;

    if (!user_query || !kurs) {
        res.status(400).json({ error: 'Bad Request' });
        return;
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Find latest document with kurs: kurs and type: eval
        const result = await collection.findOne({ kurs: kurs, type: "eval" });
        
        if (result) {
            res.status(200).json(result);
        } else {
            return ({
                "type": "eval",
                "kurs": kurs,
                "section": 1,
                "timestamp": new Date()
            })
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}