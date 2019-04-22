/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - authorization.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 08/04/2019
 **************************************************************************************************/
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
