const MongoClient = require('mongodb');
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {
    console.log('Connected correctly to the server');

    const db = client.db(dbname);

    dboper.insertDocument(db, { "name": "Fuchka", "description": "Yummy" }, 'dishes')
        .then((result) => {
            console.log(`\nInsert Document:\n ${JSON.stringify(result.ops)}`);

            return dboper.findDocuments(db, 'dishes')
        })
        .then((docs) => {
            console.log(`\nFound Documents:\n ${JSON.stringify(docs)}`);

            return dboper.updateDocument(db, { "name": "Fuchka" }, { "description": "Too Yummy" }, 'dishes')
        })
        .then((result) => {
            console.log(`\mUpdated Document:\n ${JSON.stringify(result.result)}`);

            return dboper.findDocuments(db, 'dishes')
        })
        .then((docs) => {
            console.log(`\nFound Updated Documents:\n ${JSON.stringify(docs)}`);

            return dboper.removeDocument(db, { "name": "Fuchka" }, "dishes")
        })
        .then((result) => {
            console.log(`\nRemoved Document:\n ${JSON.stringify(result.result)}`);

            return db.dropCollection('dishes')
        })
        .then((result) => {
            console.log(`\nDropped Collection:\n ${JSON.stringify(result)}`);
            client.close();
        })
        .catch((err) => console.log(err));
})
    .catch((err) => console.log(err));