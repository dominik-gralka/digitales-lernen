const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import { Overview } from '../../components/overview';

export default function handler(req, res) {

    const user_query = req.query.user;

    client.connect(err => {
        const db = client.db("digitl")

        // Check if collection user_query exists
        db.listCollections({ name: user_query }).toArray(function (err, collections) {
            if (err) throw err;
            if (collections.length == 0) {
                res.status(404).redirect('/login?error=user_not_found');
            } else {
                const collection = db.collection(user_query);

                // Check if there is more than one entry in the collection
                collection.countDocuments(function (err, count) {
                    if (err) throw err;
                    if (count > 1) {
                        res.status(200).redirect('/');
                    } else {
                        // Get length of Overview JSON and create progress document
                        const length = Object.keys(Overview).length;

                        for (let i = 0; i < length; i++) {
                            // Insert progress document
                            collection.insertOne({
                                "type": "progress",
                                "kurs": Object.keys(Overview)[i],
                                "section": 0,
                                "timestamp": new Date()
                            }, function (err, result) {
                                if (err) throw err;
                            });
                        }

                        res.status(200).redirect('/erste_schritte');


                    }
                });

            }
        });

    });

}