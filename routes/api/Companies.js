const express = require('express');
const router = express.Router();

const Company = require('../../models/Company');

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

// TODO:
// Post
// Update
// Delete

module.exports = router;