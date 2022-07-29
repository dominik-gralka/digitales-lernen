const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default function handler(req, res) {

    const user_query = req.query.user;
    const kurs_query = req.query.kurs;
    const section_query = req.query.section;

    client.connect(err => {
        const collection = client.db("digitl").collection(user_query);

        // Create a new document with type: "progress", kurs: kurs, section: section
        const newDoc = {
            type: "progress",
            kurs: kurs_query,
            section: section_query
        }
        
        // Find latest document and replace
        collection.find({ type: "progress", kurs: kurs_query }).sort({ _id: -1 }).limit(1).toArray(function(err, result) {
            if (err) throw err;
            if (result.length > 0) {
                collection.replaceOne({ _id: result[0]._id }, newDoc, function(err, result) {
                    if (err) throw err;;
                });
            } else {
                collection.insertOne(newDoc, function(err, result) {
                    if (err) throw err;
                });
            }
        });

    });

}