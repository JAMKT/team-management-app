const express = require('express');
const router = express.Router();

const Job = require('../../models/Job');

// GET
// Get jobs
router.get('/', (req, res) => {
    Job.find({}, (err, jobs) => {
        err ? res.send('No jobs found.') : res.send(jobs);
    });
});

// GET
// Get single job by its id
router.get('/:id', (req, res) => {
    Job.findById(req.params.id, (err, job) => {
        err ? res.send('Job not found.') : res.send(job);
    });
});

// TODO:
// Post
// Update
// Delete

module.exports = router;