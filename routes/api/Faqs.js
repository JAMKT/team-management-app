const express = require('express');
const router = express.Router();

const Faq = require('../../models/Faq');

// GET
// Get faqs
router.get('/', (req, res) => {
    Faq.find({}, (err, faqs) => {
        err ? res.send('No faqs found.') : res.send(faqs);
    });
});

// GET
// Get single faq by its id
router.get('/:id', (req, res) => {
    Faq.findById(req.params.id, (err, faq) => {
        err ? res.send('Faq not found.') : res.send(faq);
    });
});

// TODO:
// Post
// Update
// Delete

module.exports = router;