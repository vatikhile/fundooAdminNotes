const contuser = require('../controller/controller')
const express = require('express')
const router = express.Router();
const authRoute=require('./authorization')
const chatcon=require('../controller/chatController')

router.post('/register', contuser.register);
router.post('/login',contuser.login);
router.use('/auth',authRoute)
router.post('/forgotPassword',contuser.forgotPassword);
router.post('/resetPassword:token',contuser.resetPassword);
router.get('/getAllUser',contuser.getAllUser);
router.get('/getUserMsg',chatcon.getUserMsg)

module.exports = router;


