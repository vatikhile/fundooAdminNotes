const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route = require('./routes/routes');
const expressValidator = require('express-validator');
// const route = require('../chatapp/routes/routes')
// const chatController = require('./controller/chatController')

// create express app
const app = express();

app.use(expressValidator());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.use('/', route) ;

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => res.send('Hello World!'));