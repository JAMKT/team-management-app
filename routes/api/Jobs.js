const express = require('express');
const router = express.Router();

const Job = require('../../models/Job');
const Onboarding = require('../../models/Onboarding');

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

// POST
// Create a job
router.post('/', (req, res) => {
    const data = req.body;

    try {
        const newJob = new Job({
            name: data.name,
            description: data.description,
            lead: data.lead,
            responsibilities: (data.responsibilities) ? data.responsibilities : [],
            company: data.company
        });

        newJob.save();

        Onboarding.find({ company: newJob.company }, (err, foundOnboarding) => {
            foundOnboarding[0].jobs.push(newJob);
            foundOnboarding[0].save();
        });
        res.send(newJob);
    } catch (err) {
        res.send('Could not create this job.');
    }
});

// POST
// Update a job
router.post('/:id', (req, res) => {
    const data = req.body;

    try {
        Job.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: data.name,
                description: data.description,
                lead: data.lead,
                responsibilities: (data.responsibilities) ? data.responsibilities : []
            }
        }, { new: true })
            .then(response => { res.send(response); })
            .catch(err => { res.send('Could not update this job.'); });
    } catch (err) {
        res.send('Could not update this job.');
    }
});

// DELETE
// Delete a job
router.get('/delete/:id', (req, res) => {
    try {
        Job.findByIdAndRemove({ _id: req.params.id }, (err) => {
            err ? res.send(err) : res.send('Job has been deleted!');
        });
    } catch (err) {
        res.send('Job could not be deleted. Try again.');
    }
});

module.exports = router;