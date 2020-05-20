//Require mongoose package
const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
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
    job_title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    },
    description: String,
    contacts: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String,
            nickname: String
        }
    ],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
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