const express = require('express');
const router = express.Router();

const Company = require('../../models/Company');
const Job = require('../../models/Job');
const User = require('../../models/User');

// GET
// Get companies
router.get('/', (req, res) => {
    Company.find({}, (err, companies) => {
        err ? res.send('No companies found.') : res.send(companies);
    });
});

// GET
// Get single company by its id
router.get('/:id', (req, res) => {
    Company.findById(req.params.id, (err, company) => {
        err ? res.send('Company not found.') : res.send(company);
    });
});

// POST
// Create a company
router.post('/', (req, res) => {
    const data = req.body;

    try {
        // Create a company
        const newCompany = new Company({
            name: data.name,
            description: (data.description) ? data.description : null,
            owner: {
                user: req.user._id,
                username: req.user.username
            },
            address: (data.address) ? data.address : null,
            email: data.email,
            members: [
                {
                    user: req.user._id,
                    username: req.user.username
                }
            ]
        });

        newCompany.save();

        res.send(newCompany);
    } catch (err) {
        res.send('Could not create this company.');
    }
});

// POST
// Update a company's information
router.post('/:id', (req, res) => {
    const data = req.body;
    
    try {
        Company.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: data.name,
                description: (data.description) ? data.description : null,
                address: (data.address) ? data.address : null,
                email: data.email
            }
        }, { new: true })
        .then(response => { res.send(response); })
        .catch(err => { res.send('Could not update this company.'); });
    } catch(err) {
        res.send('Could not update this company.');
    }
});

// TODO! ------------------------------- //
// DELETE
// Delete a company
router.get('/delete/:id', (req, res) => {
    // Trace relationships
});

module.exports = router;