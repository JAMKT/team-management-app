const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');
const Project = require('../../models/Project');

// GET
// Get tasks
router.get('/', (req, res) => {
    Task.find({}, (err, tasks) => {
        err ? res.send('No tasks found.') : res.send(tasks);
    });
});

// GET
// Get single task by its id
router.get('/:id', (req, res) => {
    Task.findById(req.params.id, (err, task) => {
        err ? res.send('Task not found.') : res.send(task);
    });
});

// POST
// Create a task
router.post('/', (req, res) => {
    const data = req.body;

    try {
        newTask = new Task({
            name: data.name,
            description: data.description,
            author: {
                id: req.user._id,
                username: req.user.username
            },
            assign: data.assign,
            status: data.status,
            tags: data.tags,
            startDate: data.startDate,
            endDate: data.endDate
        });

        Project.findById(req.params.project_id, (err, actualProject) => {
            err ? res.send(err) : Task.create(newTask, (err, task) => {
                err ? res.send(err) : task.save();
                actualProject.tasks.push(task);
                actualProject.save();
            });
        }).then((task) => {
            res.send(task);
        });
    } catch {
        res.send('Could not create this task.');
    }
});

// UPDATE
// Update single task by id
router.post('/:id', (req, res) => {
    try {
        Task.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                name: data.name,
                description: data.description,
                assign: data.assign,
                status: data.status,
                tags: data.tags,
                startDate: data.startDate,
                endDate: data.endDate
            }
        }, { new: true })
            .then(response => { res.send(response); })
            .catch(err => { res.send('Could not update this task.'); });
    } catch (err) {
        res.send('Could not update this task.');
    }
});

// DELETE
// Delete single task by id
router.get('/delete/:id', (req, res) => {
    //Find the task to delete
    Task.findByIdAndRemove(req.params.id, function (err) {
        err ? res.send(err) : res.send("Task deleted!")
    });
});

module.exports = router;