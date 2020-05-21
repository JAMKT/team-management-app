const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Require Models
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
// Get users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        err ? res.send('No users found.') : res.send(users);
    });
});

// GET
// Get current user 
router.get('/current-user', (req, res) => {
    req.user ? res.send(req.user) : res.send('No current user found');
});

// GET
// Get single user by its id
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        err ? res.send('User not found.') : res.send(user);
    });
});

// POST
// Register new user
router.post('/register', async (req, res) => {
    const data = req.body;

    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data.password, salt);

    // Create a new user
    try {
        const newUser = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            password: hash,
            isOwner: data.isOwner,
            description: (data.description) ? data.description : null,
            contacts: []
        });

        await newUser.save();

        // If the current user is not an owner, update their company's members array
        if (!newUser.isOwner) {
            await Company.findOneAndUpdate({ _id: data.companyId }, {
                $addToSet: {
                    members: { 
                        user: newUser._id,  
                        username: newUser.username
                    }
                }
            }, { new: true })
            .then(response => { console.log(response); })
            .catch(err => { console.log('Could not update this company.'); });
        }

        res.status(200).send("Welcome to the team!");

    } catch (err) {
        // If there are errors: send an error
        res.status(500).send(err);
    }
});

// POST
// Login with user credentials
// Handling login logic
router.post('/login', (req, res, next) => {
    let password = req.body.password;
    let email = req.body.email;

    if (password && email) {
        User.findOne({ "email": email }, function (err, foundUser) {
            if (!foundUser) {
                res.json({
                    success: false,
                    message: 'Incorrect credentials 1'
                });
            } else {
                bcrypt.compare(password, foundUser.password, (err, password) => {
                    if (password) {
                        passport.authenticate('local')(req, res, function () {
                            //TODO
                            if (err) {
                                console.log(err);
                            } else {
                                res.json({
                                    foundUser: req.user
                                });
                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Incorrect credentials 2'
                        });
                    }
                })
            }
        })
    } else {
        res.json({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
});

// GET
// Logout
router.get('/logout', (req, res) => {
    req.logout();
});

// POST
// Update a user
router.post('/:id', async (req, res) => {
    const data = req.body;
    let userPassword;

    try {
        // Check if the password provided is the same as the user's password or not
        await bcrypt.compare(data.password, req.user.password, async (err, password) => {
            if (password) {
                userPassword = password;
            } else {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(data.password, salt);
    
                userPassword = hash;
            }
        });

        await User.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                email: data.email,
                password: userPassword,
                description: (data.description) ? data.description : null
            }
        }, { new: true })
        .then(response => { res.send(response); })
        .catch(err => { res.send('Could not update this user.'); });
    } catch(err) {
        res.send(err);
    }
});

// DELETE 
// Delete a user
router.get('/delete/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user.isOwner) {
        await Company.find({owner: user._id}, (err, foundCompany) => {
            err ? res.send(err) : console.log("Company " + foundCompany.name + "found");

            const company_id = foundCompany._id;

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
        
            await Category.deleteMany({ company: company_id }, err => {
                err ? res.send(err) : console.log("Categories of " + company_id + " deleted");
            });
        
            await Project.find({ company: company_id }, (err, project) => {
                project.forEach((foundProject) => {
                    foundProject.tasks.forEach((taskToDelete) => {
                        Task.findByIdAndRemove({ _id: taskToDelete._id }, err => {
                            if(err){
                                res.send(err);
                            }
                        });
                    });
                    console.log("Tasks of " + foundProject._id + " deleted");
                });
            });
        
            await Project.deleteMany({ company: company_id }, err => {
                err ? res.send(err) : console.log("Projects of" + company_id + " deleted");
            });
        
            await Company.findById(company_id, (err, foundCompany) => {
                err ? res.send(err) : foundCompany.members.forEach((memberToDelete) => {
                    User.findByIdAndRemove({ _id: memberToDelete._id }, err => {
                        if (err) {
                            res.send(err);
                        }
                    });
                });
        
                console.log("Users of " + company_id + " deleted");
            });
        
            await Company.findByIdAndRemove({ company: company_id }, err => {
                err ? res.send(err) : res.send("Company deleted succesfully");
            });
        });
    } else {
        User.findByIdAndRemove({ _id: user._id }, (err) => {
            err ? res.send(err) : res.send('User has been deleted!');
        });
    }
});

module.exports = router;