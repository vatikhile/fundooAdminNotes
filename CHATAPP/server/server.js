const express = require('express');//use the express module
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route = require('./routes/routes');
const expressValidator = require('express-validator');
// const route = require('../chatapp/routes/routes')
// const chatController = require('./controller/chatController')

// create an object of express module
const app = express();
//executed for any type of HTTP request and it wrap the express with validator
app.use(expressValidator());



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.static('../client'))

// define a simple route
app.use('/', route) ;

// make server listen on port 3000
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
// app.use(express.static("public"));
// app.get('/', (req, res) => res.send('Hello World!'));