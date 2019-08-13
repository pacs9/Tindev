const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-6mh9h.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
}) ;

server.use(cors());
server.use(express.json());
server.use(routes);

//porta que o server vai ouvir
server.listen(3333);