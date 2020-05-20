//Require mongoose package
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
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
    questions: [
        {
            faq: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Faq"
            },
            question: String
        }
    ],
    //Automatically gets the date of creation of the faq
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our categorySchema with Category as a reference, this reference will be used in other models
module.exports = mongoose.model("Category", categorySchema); 