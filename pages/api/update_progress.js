const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default async function handler(req, res) {

    const user_query = req.query.user;
    const kurs_query = req.query.kurs;
    const section_query = req.query.section;

    const newDoc = {
        type: "progress",
        kurs: kurs_query,
        section: section_query,
        timestamp: new Date()
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Find document with highest section of type: "progress" with kurs: kurs
        const result = await collection.find({ "kurs": kurs_query, "type": "progress" }).sort({ "section": -1 }).limit(1).toArray();

        // If there is a document with type:eval_result and kurs: kurs, don't update
        const result2 = await collection.find({ "kurs": kurs_query, "type": "eval_result" }).toArray();

        if (result2.length !== 0) {
            conn.close();
            res.status(200).json({ error: 'No update' });
        } else {
            if (result.length !== 0) {
                collection.replaceOne({ _id: result[0]._id }, newDoc, function(err, result) {
                    if (err) throw err;;
                    conn.close();
                    res.status(200).json({ error: 'Updated' });
                });
            } else {
                collection.insertOne(newDoc, function(err, result) {
                    if (err) throw err;
                    conn.close();
                    res.status(200).json({ error: 'Inserted' });
                });
            }
        }

    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}