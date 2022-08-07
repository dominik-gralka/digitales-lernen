const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default function handler(req, res) {

    const user_query = req.query.user;
    const kurs = req.query.kurs;

    client.connect(err => {
        const collection = client.db("digitl").collection(user_query);

        // Find and return the newest document with type: "progress"
        collection.find({ kurs: kurs }).sort({ _id: -1 }).limit(1).toArray(function (err, result) {
            if (err) throw err;
            res.status(200).json(result[0]);
        });

    });

}