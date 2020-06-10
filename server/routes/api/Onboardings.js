const express = require('express');
const router = express.Router();

const Onboarding = require('../../models/Onboarding');

// GET
// Get onboarding experiences
router.get('/', (req, res) => {
    Onboarding.find({}, (err, onboarding) => {
        err ? res.send('No onboarding experience found.') : res.send(onboarding);
    });
});

// GET 
// Get a single onboarding experience
router.get('/:id', (req, res) => {
    Onboarding.findById(req.params.id, (err, onboarding) => {
        err ? res.send('Onboarding experience not found.') : res.send(onboarding);
    });
});

// POST
// Create an onboarding experience
router.post('/', (req, res) => {
    const data = req.body;

    try {
        const newOnboarding = new Onboarding({
            company: data.company,
            description: (data.description) ? data.description : null,
            jobs: [],
            editors: data.editors,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        });

        newOnboarding.save();
        res.send(newOnboarding);
    } catch(err) {
        res.send('Could not create this onboarding experience.');
    }
});

// POST
// Update an onboarding experience
router.post('/:id', (req, res) => {
    const data = req.body;

    try {
        Onboarding.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                description: (data.description) ? data.description : null,
                editors: data.editors
            }
        }, { new: true })
        .then(response => { res.send(response); })
        .catch(err => { res.send('Could not update this onboarding experience.'); });
    } catch(err) {
        res.send('Could not update this onboarding experience.');
    }
});

// DELETE
// Delete an onboarding experience
router.get('/delete/:id', (req, res) => {
    Onboarding.findByIdAndRemove({ _id: onboarding._id }, (err) => {
        err ? res.send(err) : res.send('Onboarding experience has been deleted!');
    });
});

module.exports = router;