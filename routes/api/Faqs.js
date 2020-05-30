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

// GET
// Get single category by its id
router.get('/categories/:id', (req, res) => {
    Category.findById(req.params.id, (err, category) => {
        err ? res.send('Category not found.') : res.send(category);
    });
});

// POST
// Post a question
router.post('/', async (req, res) => {
    const data = req.body;
    const categories = data.categories;

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

        await categories.forEach(category => {
            Category.findByIdAndUpdate({ _id: category.id }, {
                $addToSet: {
                    questions: {
                        faq: newQuestion._id,
                        question: newQuestion.question
                    }
                }
            }, { new: true })
            .then(response => { res.send(response); })
            .catch(err => { res.send('Could not update this category.'); });
        });
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
    const categories = data.categories;

    try {
        // Update actual question
        Faq.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                question: data.question,
                answer: data.answer
            }
        }, 
        { new: true },
        (err, question) => {
            // Update question in its category as well
            err ? res.send('Could not update this question.') : 
                categories.forEach(category => {
                    Category.updateOne({ "_id": category.id, "questions": { $elemMatch: { "faq": req.params.id }} }, {
                        $set: {
                            "questions.$.question": question.question
                        }
                    }, 
                    { new: true }, // Return the newly updated version of the document
                    (err, category) => {
                        err ? console.log('Could not update this category.') : console.log(category);
                    }); 
                });

                res.send(question);
        });
    } catch(err) {
        res.send(err);
    }
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