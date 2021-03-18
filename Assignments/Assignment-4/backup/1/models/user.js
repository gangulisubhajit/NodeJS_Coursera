var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PassportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(PassportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);