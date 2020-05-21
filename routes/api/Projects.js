const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');
const Task = require('../../models/Task');

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

// POST
// Create a project
router.post('/', (req, res) => {
    const data = req.body;

    try {
        const newProject = new Project({
            author: {
                id: req.user._id,
                username: req.user.username
            },
            name: data.name,
            description: (data.description) ? data.description : null,
            team: data.team,
            company: data.company,
            tags: (data.tags) ? data.tags : [],
            tasks: [],
            startDate: data.startDate,
            endDate: data.endDate
        });

        newProject.save();
        res.send(newProject);
    } catch(err) {
        res.send('Could not create this project.');
    }
});

// POST
// Update a project
router.post('/:id', (req, res) => {
    const data = req.body;

    try {
        Project.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                author: {
                    id: req.user._id,
                    username: req.user.username
                },
                name: data.name,
                description: (data.description) ? data.description : null,
                team: data.team,
                company: data.company,
                tags: (data.tags) ? data.tags : [],
                startDate: data.startDate,
                endDate: data.endDate
            }
        }, { new: true })
        .then(response => { res.send(response); })
        .catch(err => { res.send(err); });
    } catch(err) {
        res.send(err);
    }
});

// DELETE
router.get('/delete/:id', async (req, res) => {
    // Make sure that the project's tasks are deleted first
    const project = await Project.findOne({ _id: req.params.id });

    // If there are tasks in this project, loop through them and delete them
    // Afterwards, delete the project no matter what
    if (project.tasks) {
        const tasksArray = project.tasks;

        tasksArray.forEach(async (task) => {
            await Task.findByIdAndRemove({ _id: task }, (err, task) => {
                err ? res.send(err) : console.log('Task has been deleted!');
            });
        });
    }

    // Delete the project
    await Project.findByIdAndRemove({ _id: project._id }, (err) => {
        err ? res.send(err) : res.send('Project has been deleted!');
    });
});

module.exports = router;