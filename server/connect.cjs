const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const DB = process.env.ATLAS_URI;
const client = new MongoClient(DB);

async function main() {
    try {
        await client.connect();
        const collections = await client.db("expenselogger").collections();
        collections.forEach((collection) => console.log(collection.s.namespace.collection));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

app.get('/data', async (req, res) => {
    try {
        await client.connect();
        const collections = await client.db("expenselogger").collections();
        const collectionNames = collections.map((collection) => collection.s.namespace.collection);
        res.json(collectionNames);
    } catch (e) {
        res.status(500).send(e.toString());
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    main();
});