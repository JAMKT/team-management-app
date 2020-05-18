//Require mongoose package
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    author: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    content: String,
    //Automatically gets the date of creation of the faq
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our faqSchema with Faq as a reference, this reference will be used in other models
module.exports = mongoose.model("Faq", faqSchema); 