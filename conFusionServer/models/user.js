var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PassportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(PassportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);