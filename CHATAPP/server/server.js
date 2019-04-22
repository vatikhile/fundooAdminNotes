/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - server.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 08/04/2019
 **************************************************************************************************/
const express = require('express');//use the express module
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const route = require('./routes/routes');
const expressValidator = require('express-validator');
const http= require('http');
const cors=require('cors');


//  const route = require('../chatapp/routes/routes')
const chatController = require('./controller/chatController')

// create an object of express module
const app = express();
//executed for any type of HTTP request and it wrap the express with validator
app.use(expressValidator());
// const chatController = require('./controller/chatController');
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.static('../client')); 
app.use('/', route) ;

// make server listen on port 3000
var server=app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

    
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log("socket is connected ");
    socket.on('createMessage',function(message)
    {
        chatController.message(message,(err,data)=>
        {
if (err)
{
console.log("Error:in message",err);

}
else{
console.log(message+'in server');
io.emit('newMessageSingle',message);
}
});
socket.on('disconnect',function(){
console.log('socket is disconnect');
});
    });
});
// define a simple route
//app= express.createServer();

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/', (req, res) => res.send('Hello World!'))

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
