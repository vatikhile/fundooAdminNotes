 /*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - routes.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 08/04/2019
 **************************************************************************************************/
 const contuser = require('../controller/controller')
const express = require('express')
const router = express.Router();
const authRoute=require('../authentication/index')
const authuser=require('../routes/authorization')
const chatcon=require('../controller/chatController')

router.post('/register', contuser.register);
router.post('/login',contuser.login);
 router.use('/auth',authuser)
router.post('/forgotPassword',contuser.forgotPassword);
router.post('/resetPassword',authRoute.checkToken,contuser.resetPassword);
 router.get('/getAllUser',contuser.getAllUser);


module.exports = router;


