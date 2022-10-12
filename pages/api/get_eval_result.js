const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import { Overview } from '../../components/overview';

export default async function handler(req, res) {

    const user_query = req.query.user;
    const kurs = req.query.kurs;
    const info = Overview[kurs];

    if (!user_query || !kurs) {
        res.status(400).json({ error: 'Bad Request' });
        return;
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Find all documents with kurs: kurs and type: eval
        const result = await collection.find({ "kurs": kurs, "type": "eval" }).sort({ "section": -1 }).toArray();

        if (result.length < info.eval_sections) {
            res.status(400).json({ error: 'Bad Request' });
            return;
        }

        // Get correct answers and calculate percentage using info.eval_sections
        const correct = result.filter((item) => item.correct).length;
        const percentage = Math.round(correct / info.eval_sections * 100);

        // Create new document with type: eval_result
        const eval_result = {
            "type": "eval_result",
            "kurs": kurs,
            "correct": correct,
            "percentage": percentage,
            "timestamp": new Date()
        }

        // Insert new document if there is no document with type: eval_result
        const result2 = await collection.find({ "kurs": kurs, "type": "eval_result" }).toArray();
        if (result2.length === 0) {
            await collection.insertOne(eval_result);
        }

        conn.close();

        res.status(200).json({ percentage: percentage, sections: result });


    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}