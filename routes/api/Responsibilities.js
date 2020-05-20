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

// TODO:
// Post
// Update
// Delete

module.exports = router;