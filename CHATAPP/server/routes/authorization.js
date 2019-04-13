
var express = require('express');

var router = express.Router();
var users = require('../controller/controller');
// var chatController = require("../controller/chatController");
var auth = require('../authentication');

try{
    router.get('/getAllUser',auth,users.getAllUser);
    router.get('/getUserMsg',auth,chatController.getUserMsg);
    
}
catch(err)
{
    console.log("ERROR : in authorization");
}

module.exports =router