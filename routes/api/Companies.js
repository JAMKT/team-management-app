const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');
const Company = require('../../models/Company');
const Faq = require('../../models/Faq');
const Job = require('../../models/Job');
const Onboarding = require('../../models/Onboarding');
const Project = require('../../models/Project');
const Responsibility = require('../../models/Responsibility');
const Task = require('../../models/Task');
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

// DELETE
// Delete a company
router.get('/delete/:id', async (req, res) => {
    const company_id = req.params.id;

    await Job.deleteMany({ company: company_id }, err => {
        err ? res.send(err) : Responsibility.deleteMany({ company: company_id }, err => {
            err ? res.send(err) : Onboarding.deleteMany({ company: company_id }, err =>{
                err ? res.send(err) : console.log("Onboarding of " + company_id + " deleted");
            })
        });
    });

    await Faq.deleteMany({ company: company_id }, err => {
        err ? res.send(err) : console.log("Faq of " + company_id + " deleted");
    });

    await Project.find({ company: company_id }, (err, foundProject) => {
        foundProject.tasks.forEach((taskToDelete) => {
            Task.findByIdAndDelete({ _id: taskToDelete._id }, err => {
                if(err){
                    res.send(err);
                }
            });
        });
        console.log("Tasks of " + foundProject._id + " deleted");
    });

    await Project.deleteMany({ company: company_id }, err => {
        err ? res.send(err) : console.log("Projects of" + company_id + " deleted");
    });

    await Company.findById(company_id, (err, foundCompany) => {
        err ? res.send(err) : foundCompany.members.forEach((memberToDelete) => {
            User.findByIdAndDelete({ _id: memberToDelete._id }, err => {
                if (err) {
                    res.send(err);
                }
            });
        });

        console.log("Users of " + company_id + " deleted");
    });

    await Company.findByIdAndDelete({ company: company_id }, err => {
        err ? res.send(err) : res.send("Company deleted succesfully");
    });
});

module.exports = router;