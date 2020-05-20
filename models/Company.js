//Require mongoose package
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

//Exports our companySchema with Company as a reference, this reference will be used in other models
module.exports = mongoose.model("Company", companySchema); 