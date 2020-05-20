const express = require('express');
const router = express.Router();

const Faq = require('../../models/Faq');
const Category = require('../../models/Category');

// GET
// Get faqs
router.get('/', (req, res) => {
    Faq.find({}, (err, faqs) => {
        err ? res.send('No faqs found.') : res.send(faqs);
    });
});

// GET
// Get faqs' categories
router.get('/categories', (req, res) => {
    Category.find({}, (err, categories) => {
        err ? res.send('No categories found.') : res.send(categories);
    });
});

// GET
// Get single faq by its id
router.get('/:id', (req, res) => {
    Faq.findById(req.params.id, (err, faq) => {
        err ? res.send('Faq not found.') : res.send(faq);
    });
});

// POST
// Post a question
router.post('/', async (req, res) => {
    const data = req.body;

    try {
        const newQuestion = new Faq({
            company: data.company, // Check how to get the company
            author: {
                user: req.user._id,
                username: req.user.username
            },
            question: data.question,
            answer: data.answer
        });

        await newQuestion.save();

        await Category.findByIdAndUpdate({ _id: data.category }, {
            $addToSet: {
                questions: {
                    faq: newQuestion._id,
                    question: newQuestion.question
                }
            }
        }, { new: true })
        .then(response => { res.send(response); })
        .catch(err => { res.send('Could not update this category.'); });

        res.send(newQuestion);
    } catch(err) {
        res.send('Could not create this question.')
    }
});

// POST
// Post a category
router.post('/categories', (req, res) => {
    const data = req.body;

    try {
        const newCategory = new Category({
            name: data.name,
            company: data.company, // Check how to get the company
            questions: []
        });

        newCategory.save();
        res.send(newCategory);
    } catch(err) {
        res.send('Could not create this category.')
    }
});

// POST
// Update a question
router.post('/:id', (req, res) => {
    const data = req.body;

    // Update actual question and update question in its category as well
    Faq.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
            company: data.company, // Check how to get the company
            author: {
                user: req.user._id,
                username: req.user.username
            },
            question: data.question,
            answer: data.answer
        }
    }, { new: true })
    .then(response => {
        Category.findById(data.category, (err, category) => {
            const questionsArray = category.questions;

            questionsArray.forEach(question => {
                if (question.faq === req.params.id) {
                    question.question = data.question;
                }
            });

            category.save();
            res.send(response);
        });
    })
    .catch(err => { res.send('Could not update this question.'); });
});


// GET
// Delete a question
router.get('/delete/:id', (req, res) => {
    // Remove question from its category
    // Then delete the question itself
    Category.findById(data.category, async (err, category) => {
        const questionsArray = category.questions;
        const questionToRemove = await Faq.findById(req.params.id);
        
        questionsArray.filter(question => question !== questionToRemove);

        await category.save();

        await Faq.findByIdAndRemove(req.params.id, function (err) {
            err ? res.send('Could not delete this question.') : res.send('Question deleted!');
        });
    });
});

module.exports = router;