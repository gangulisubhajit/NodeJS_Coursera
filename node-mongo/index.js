const MongoClient = require('mongodb');
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.strictEqual(err, null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);

    dboper.insertDocument(db, { "name": "Fuchka", "description": "Yummy" }, 'dishes', (result) => {
        console.log(`Insert Document:\n ${JSON.stringify(result.ops)}`);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log(`\nFound Documents:\n ${JSON.stringify(docs)}`);

            dboper.updateDocument(db, { "name": "Fuchka" }, { "description": "Too Yummy" }, 'dishes', (result) => {
                console.log(`Updated Document:\n ${JSON.stringify(result.result)}`);

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log(`\nFound Updated Documents:\n ${JSON.stringify(docs)}`);

                    dboper.removeDocument(db, { "name": "Fuchka" }, "dishes", (result) => {
                        console.log(`Removed Document:\n ${JSON.stringify(result.result)}`);

                        db.dropCollection('dishes', (result) => {
                            console.log(`\nDropped Collection:\n ${JSON.stringify(result)}`);
                            client.close();
                        });
                    });
                });
            });
        });
    });
});