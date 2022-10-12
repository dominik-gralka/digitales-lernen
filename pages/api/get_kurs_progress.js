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

        const group = await collection.find({ type: "account-group" }).toArray();

        // Find latest document with kurs = kurs
        let result = await collection.findOne({ kurs: kurs });

        // If there is no result, return empty object
        if (!result) {
            result = {
                type: "progress",
                kurs: kurs,
                section: 0,
                started: false,
                timestamp: new Date()
            }
        }

        if (group[0].group == "b") {
            // Apend group indicator to result
            result.group = "b";
        } else {
            result.group = "a";
        }

        // Check if there is an eval_result document
        const eval_result = await collection.findOne({ kurs: kurs, type: "eval_result" });
        
        if (eval_result) {
            result.eval_result = true;
        } else {
            result.eval_result = false;
        }

        res.status(200).json(result);

    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}