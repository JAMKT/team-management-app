//Require mongoose package
const mongoose = require('mongoose');

const onboardingSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    description: String,
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }],
    editors: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    ],
    author: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    //Automatically gets the date of creation of the onboarding
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our onboardingSchema with Onboarding as a reference, this reference will be used in other models
module.exports = mongoose.model("Onboarding", onboardingSchema); 