const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Biryni',
        description: 'tasty food'
    });

    newDish.save()
        .then((dish) => {
            console.log('\nInserted Data:\n' + dish);

            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log('Dishes:\n' + dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(edrr);
        })
});