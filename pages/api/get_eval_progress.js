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

        // Find document with highest section of type:eval with kurs: kurs
        const result = await collection.find({ "kurs": kurs, "type": "eval" }).sort({ "section": -1 }).limit(1).toArray();
        
        if (result.length !== 0) {
            conn.close();
            res.status(200).json(result[0]);
        } else {
            conn.close();
            res.status(200).json({
                "type": "eval",
                "kurs": kurs,
                "section": 1,
                "started": false,
                "timestamp": new Date()
            });
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}