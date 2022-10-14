const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import { Overview } from '../../components/overview';


export default async function handler(req, res) {

    const user_query = req.query.user;

    if (!user_query) {
        res.status(400).json({ error: 'Bad Request' });
        return;
    }

    try {
        const conn = await client.connect()
        const collection = conn.db("digitl").collection(user_query);

        // Get every document with type progress and check how much of the chapters are completed
        const cursor = await collection.find({ type: "progress" });
        const progress = await cursor.toArray();

        const percentage = [];

        // Get all fields with enabled true from Overview
        const enabled = [];
        for (const [key, value] of Object.entries(Overview)) {
            if (value.enabled) {
                enabled.push(key);
            }
        }

        for (let i = 0; i < progress.length; i++) {
            const kurs = progress[i].kurs;
            const section = progress[i].section;
            const maxsection = Overview[kurs].sections;

            //console.log(kurs, section, maxsection, section / maxsection);

            // Calculate progress percentage and push to array
            // If section > maxsection, then the user has completed the course
            // Otherwise, check if section / maxsection is a number

            // If enabled, add to calculation
            if (enabled.includes(kurs)) {
                if (section > maxsection) {
                    percentage.push(100);
                } else if (!isNaN(section / maxsection)) {
                    percentage.push(Math.round(((section - 1) / maxsection) * 100));
                }
            }
        }

        const overall = Math.round(percentage.reduce((a, b) => a + b, 0) / enabled.length);

        // Find newest document with type progress
        const newest = await collection.find({ type: "progress" }).sort({ timestamp: -1 }).limit(1).toArray();

        // Find document with highest section number
        const highest = await collection.find({ type: "progress" }).sort({ section: -1 }).limit(1).toArray();

        // Find document with type "account-group"
        const group = await collection.find({ type: "account-group" }).toArray();

        conn.close();

        res.status(200).json({
            group: group[0].group,
            percentage: overall,
            newest: newest[0],
            highest: highest[0],
        });


    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}