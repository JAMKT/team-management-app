const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

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

// TODO:
// Post
// Update
// Delete

module.exports = router;