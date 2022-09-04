const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import { createAuthority, verifyAuthority } from '../../jwt/manageAuthority';

export default function handler(req, res) {

    const user_query = req.query.user;
    const kurs_query = req.query.kurs;
    const section_query = req.query.section;
    const correct = req.body.correct;
    const authority = req.body.authority;

    client.connect(err => {
        const collection = client.db("digitl").collection(user_query);

        // Create a new document with type: "progress", kurs: kurs, section: section
        const newDoc = {
            type: "eval",
            kurs: kurs_query,
            section: section_query,
            correct: correct,
            authority: authority,
            timestamp: new Date()
        }

        // createAuthority(user_query, kurs_query, section_query, correct)
        
        // Get all documents with type: "eval", kurs: kurs, section: section
        collection.find({ type: "eval", kurs: kurs_query, section: section_query }).toArray(function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                // If document exists, check if section_query is higher than the highest section
                let highestSection = 0;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].section > highestSection) {
                        highestSection = result[i].section;
                    }
                }
                if (section_query > highestSection) {
                    // Insert new document
                    collection.insertOne(newDoc, function(err, result) {
                        if (err) throw err;
                        res.status(200);
                    });
                } else {
                    // Return 403 Forbidden
                    res.status(403).json({ error: "Forbidden" });
                }
            } else {
                // If document does not exist, insert new document
                collection.insertOne(newDoc, function(err, result) {
                    if (err) throw err;
                    res.status(200);
                });
            }

        });

    });

}