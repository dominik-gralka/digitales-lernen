const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
import { Overview } from '../../components/overview';


export default function handler(req, res) {

    const user_query = req.query.user;

    client.connect(err => {
        const collection = client.db("digitl").collection(user_query);

        // Create progress document for each kurs
        for (let kurs in Overview) {
            const newDoc = {
                type: "progress",
                kurs: kurs,
                section: 0
            }
            collection.insertOne(newDoc, function(err, result) {
                if (err) throw err;
            });
        }

        res.status(200).send("User " + user_query + " initiated.");

    });

}