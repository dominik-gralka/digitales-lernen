const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@cluster0.wnuvuay.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

import { Overview } from '../../components/overview';

export default async function handler(req, res) {

    let global_stats = [];
    const test_accounts = ["051465", "000000"];
    const exclude_a = ["051465", "000000"];

    for (let k = 0; k < Object.keys(Overview).length; k++) {
        let kurs = Object.keys(Overview)[k];
        global_stats.push({
            kurs: kurs,
            sections: Overview[kurs].sections,
            eval_sections: Overview[kurs].eval_sections,
            score: 0,
        })
    }

    try {
        const conn = await client.connect()
        
        // Get all collections
        const collections = await conn.db("digitl").listCollections().toArray();
        
        // Loop through all collections
        for (let i = 0; i < collections.length; i++) {

            let col = collections[i];

            const account_group = await conn.db("digitl").collection(collections[i].name).findOne({ type: "account-group" });
            if (account_group.group == "b") {
                exclude_a.push(col.name);
                continue;
            }
            if (exclude_a.includes(col.name)) continue;

            // Get all progress documents from collection
            const progress = await conn.db("digitl").collection(col.name).find({ type: "progress" }).toArray();
            
            for(let j = 0; j < progress.length; j++) {
                let kurs = progress[j].kurs;
                let section = progress[j].section;
                let maxsection = Overview[kurs].sections;
                let score = section / maxsection || 0;
                if (score > 1) score = 1;

                // Append score to global_stats
                for (let k = 0; k < global_stats.length; k++) {
                    if (global_stats[k].kurs == kurs) {
                        global_stats[k].score += score;
                    }
                }

            }

        }

        // Divide score for each kurs by number of users
        for (let k = 0; k < global_stats.length; k++) {
            //console.log(collections.length - exclude_a.length, global_stats[k].score)
            global_stats[k].score = global_stats[k].score / (collections.length - exclude_a.length);
        }

        res.status(200).json(global_stats);

            


    } catch(e) {
        console.log(e)
        res.status(500).json({ error: e.message });
    }

}