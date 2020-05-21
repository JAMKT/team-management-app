const express = require('express');
const router = express.Router();

const Responsibility = require('../../models/Responsibility');

// GET
// Get responsibilities
router.get('/', (req, res) => {
    Responsibility.find({}, (err, responsibilities) => {
        err ? res.send('No responsibilities found.') : res.send(responsibilities);
    });
});

// GET
// Get single responsibility by its id
router.get('/:id', (req, res) => {
    Responsibility.findById(req.params.id, (err, responsibility) => {
        err ? res.send('Responsibility not found.') : res.send(responsibility);
    });
});

// GET
// Get responsibilities by company_id
router.get('/company/:company_id', (req, res) => {
    Responsibility.find({ "company": req.params.company_id }, (err, responsibilities) => {
        err ? res.send('Responsibilities not found.') : res.send(responsibilities);
    });
});

// GET
// Get single responsibilities by company_id
router.get('/:id/company/:company_id', (req, res) => {
    Responsibility.find({ _id: req.params.id, "company": req.params.company_id }, (err, responsibility) => {
        err ? res.send('Responsibility not found.') : res.send(responsibility);
    });
});

// POST
// Create a responsibility
router.post('/', (req, res) => {
    const data = req.body;

    try {
        const newResponsibility = new Responsibility({
            name: data.name,
            description: data.description,
            company: data.company
        });

        newResponsibility.save();
        res.send(newResponsibility);
    } catch (err) {
        res.send('Could not create this responsibility.');
    }
});

// POST
// Update a responsibility
router.post('/:id', (req, res) => {
    const data = req.body;

    try {
        Responsibility.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: data.name,
                description: data.description
            }
        }, { new: true })
            .then(response => { res.send(response); })
            .catch(err => { res.send('Could not update this responsibility.'); });
    } catch (err) {
        res.send('Could not update this responsibility.');
    }
});

//DELETE
//Delete a single responsibility
router.get('/delete/:id', (req, res) => {
    try {
        Responsibility.findByIdAndRemove({ _id: req.params.id }, (err) => {
            err ? res.send(err) : res.send('Responsibility has been deleted!');
        });
    } catch (err) {
        res.send('Responsibility could not be deleted. Try again.');
    }
});

module.exports = router;