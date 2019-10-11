const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


// ***require routers here

//  ***

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// *** server.use() reference routers from above in this file here

// ***

server.get('/', (req, res) => {
  res.send('IT LIVES! ! !');
})

module.exports = server;