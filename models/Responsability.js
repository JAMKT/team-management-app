//Require mongoose package
const mongoose = require('mongoose');

const responsabilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    //Automatically gets the date of creation of the responsability
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our responsabilitySchema with Responsability as a reference, this reference will be used in other models
module.exports = mongoose.model("Responsability", responsabilitySchema); 