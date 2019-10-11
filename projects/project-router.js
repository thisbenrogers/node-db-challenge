const express = require('express');

const db = require('../data/dbConfig');
const Projects = require('./project-model');

// ** require helper functions here

// **

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {
  Projects.addProject(req.body)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create project' });
    });
})


module.exports = router;