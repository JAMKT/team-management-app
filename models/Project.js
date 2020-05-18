//Require mongoose package
var mongoose = require('mongoose');

//Define schema of projects
var projectSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    name: String,
    description: String,
    team: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    ],
    //The tasks parameter is linked with the task collection, getting the task_id
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    tags:[{
        name: String
    }],
    startDate: Date,
    endDate: Date,
    //Automatically gets the date of creation of the project
    created: {
        type: Date,
        default: Date.now()
    }
});

//Export our projectSchema, this reference will be used in other models
module.exports = mongoose.model('Project', projectSchema);