const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import JSZip from 'jszip';

const zip = new JSZip();

export default async function handler(req, res) {

    const user_query = req.query.user;

    if (!user_query) {
        res.status(400).json({ error: 'Bad Request' });
        return;
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Get all documents
        const cursor = await collection.find();
        const data = await cursor.toArray();

        //Get all different type of documents
        const types = [...new Set(data.map(item => item.type))];

        // Create folders for each type
        for (let i = 0; i < types.length; i++) {
            const type = types[i];
            const folder = zip.folder(type);
            // Create files for each document and name them after the timestamp
            for (let j = 0; j < data.length; j++) {
                const doc = data[j];
                if (doc.type == type) {
                    // Get last 4 digits of _id and remove last 2 digits
                    const id = doc._id.toString().slice(-4);
                    folder.file("(" + id + ") " + doc.timestamp + ".json", JSON.stringify(doc));
                }
            }
        }

        conn.close();

        zip.generateAsync({ type: "nodebuffer" })
            .then(function (content) {
                res.status(200).json({
                    content: content,
                });
            });


    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}