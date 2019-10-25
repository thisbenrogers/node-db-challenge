const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


// ***require routers here
const ProjectRouter = require('../projects/project-router');
//  ***

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// *** server.use() reference routers from above in this file here
server.use('/api/projects', ProjectRouter);
// ***

server.get('/', (req, res) => {
  res.send('IT LIVES! ! !');
})

module.exports = server;