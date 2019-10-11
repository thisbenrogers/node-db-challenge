const db = require('../data/dbConfig');

module.exports = {
  findProjects,
  addProject
}

function findProjects() {
  return db('projects');
}

function addProject(proj) {
  return db('projects')
    .insert(proj);
}