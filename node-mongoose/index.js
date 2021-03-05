const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Biryni',
        description: 'tasty food'
    })
        .then((dish) => {
            console.log('\nInserted Data:\n' + dish);

            return Dishes.findByIdAndUpdate(dish._id, {
                $set: { description: 'Very yummy' }
            }, {
                new: true
            }).exec();
        })
        .then((dish) => {
            console.log('\nUpdated Dish:\n' + dish);

            dish.comments.push({
                rating: 5,
                comment: 'Awesome food!',
                author: 'Leonardo di Carpaccio'
            });

            return dish.save();
        })
        .then((dish) => {
            console.log('\nDish with comments:\n' + dish);

            return Dishes.deleteOne({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        })
});