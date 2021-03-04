const MongoClient = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.strictEqual(err, null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({ "name": "Sweets", "description": "tasty" }, (error, result) => {
        assert.strictEqual(error, null);

        console.log('After Insert:\n');
        console.log(result.ops);

        collection.find({}).toArray((er, docs) => {
            assert.strictEqual(er, null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes', (e, r) => {
                assert.strictEqual(e, null);

                client.close();
            });
        });
    });
});