//Require mongoose package
const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    location: String,
    workHours: String,
    phoneNumber: String,
    //All the users by default will have a employee account
    isOwner: {
        type: Boolean,
        default: false
    },
    jobTitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    description: String,
    //Automatically gets the date of creation of the user
    created: {
        type: Date,
        default: Date.now()
    }
});

// Makes it easier to authenticate users by adding methods with a plugin
userSchema.plugin(passportMongoose);

//Exports our userSchema with User as a reference, this reference will be used in other models
module.exports = mongoose.model("User", userSchema); 