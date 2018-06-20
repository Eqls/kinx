const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const index = require('./routes/index');
const config = require('./config');

// Database connection
mongoose.connect(config.DATABASE);
//mongoose.set('debug', true);
mongoose.connection.on('connected', function () {
    console.log('Connected to database ' + config.DATABASE)
})

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization');
    next();
});

// Initialize server
app.listen(config.PORT, function () {
    console.log('Server initialized at port: ' + config.PORT);
});

app.use('/api', index);
