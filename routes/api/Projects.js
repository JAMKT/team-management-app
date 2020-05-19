const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

// GET
// Get projects
router.get('/', (req, res) => {
    Project.find({}, (err, projects) => {
        err ? res.send('No projects found.') : res.send(projects);
    });
});

// GET
// Get single project by its id
router.get('/:id', (req, res) => {
    Project.findById(req.params.id, (err, project) => {
        err ? res.send('Project not found.') : res.send(project);
    });
});

// TODO:
// Post
// Update
// Delete

module.exports = router;