const contuser = require('../controller/controller')
const express = require('express')
const router = express.Router();
const authRoute=require('./authorization')

router.post('/register', contuser.register);
router.post('/login',contuser.login);
router.post('/forgotPassword',contuser.forgotPassword);
router.post('/resetPassword:token',contuser.resetPassword);
router.use('/auth',authRoute);
// router.post('/register', contuser.register);
module.exports = router;
