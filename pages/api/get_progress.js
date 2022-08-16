const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default function handler(req, res) {

    const user_query = req.query.user;

    client.connect(err => {
        const collection = client.db("digitl").collection(user_query);

        // Find and return document with latest timestamp
        collection.find({ type: "progress" }).sort({ timestamp: -1 }).limit(1).toArray(function(err, result) {

            client.close();

            if (err) throw err;
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(200).json({});
            }
        });

    });

}