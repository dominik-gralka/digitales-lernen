// Check whether the database can receive requests + check latency

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


export default async function handler(req, res) {

    const t_before = new Date();

    try {
        const conn = await client.connect();

        conn.close();
        
        res.status(200).json({
            "status": "ready",
            "latency": (new Date()) - t_before
        })

    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}