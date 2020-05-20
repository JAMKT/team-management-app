//Require mongoose package
const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: String,
    owner: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    address: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    people: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    ],
    //Automatically gets the date of creation of the company
    created: {
        type: Date,
        default: Date.now()
    }
});

// Makes it easier to authenticate users by adding methods with a plugin
companySchema.plugin(passportMongoose);

//Exports our companySchema with Company as a reference, this reference will be used in other models
module.exports = mongoose.model("Company", companySchema); 