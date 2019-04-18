
var express = require('express');

var router = express.Router();
var users = require('../controller/controller');
var chatController = require("../controller/chatController");
var auth = require('../authentication/index');

 try{
    router.get('/getAllUser',users.getAllUser);
    router.get('/getUserMsg',chatController.getUserMsg);
    
}

catch(err)
{
    console.log("ERROR : in authorization");
}

module.exports =router
