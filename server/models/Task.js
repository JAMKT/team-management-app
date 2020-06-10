//Require mongoose package
var mongoose = require('mongoose');

//Define the schema for our tasks
var taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    //The author parameter is linked with the user collection, getting his id and username
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    },
    assignees: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    }],
    status: String,
    tags: [{
        name: String
    }],
    startDate: Date,
    endDate: Date,
    //Automatically gets the date of creation of the task
    created: {
        type: Date,
        default: Date.now()
    }
});

//Exports our taskSchema with Task as a reference, this reference will be used in other models
module.exports = mongoose.model("Task", taskSchema);