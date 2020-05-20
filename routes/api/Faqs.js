const express = require('express');
const router = express.Router();

const Faq = require('../../models/Faq');
// const FaqsCategories = require('../../models/FaqsCategory');

// GET
// Get faqs
router.get('/', (req, res) => {
    Faq.find({}, (err, faqs) => {
        err ? res.send('No faqs found.') : res.send(faqs);
    });
});

// GET
// Get faqs' categories
// router.get('/categories', (req, res) => {
//     FaqsCategories.find({}, (err, categories) => {
//         err ? res.send('No categories found.') : res.send(categories);
//     });
// });

// GET
// Get single faq by its id
router.get('/:id', (req, res) => {
    Faq.findById(req.params.id, (err, faq) => {
        err ? res.send('Faq not found.') : res.send(faq);
    });
});

// POST
// Post a question
router.post('/', (req, res) => {

});

// POST
// Post a category
router.post('/categories', (req, res) => {

});

// POST
// Update a question
router.post('/:id', (req, res) => {

});


// POST
// Post a question
router.get('/delete/:id', (req, res) => {

});

module.exports = router;