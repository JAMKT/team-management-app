//Require mongoose package
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    lead: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    responsibilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Responsibility"
    }],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    //Automatically gets the date of creation of the job
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our jobSchema with Job as a reference, this reference will be used in other models
module.exports = mongoose.model("Job", jobSchema); 