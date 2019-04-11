const contuser = require('../controller/controller')
const express = require('express')
const router = express.Router();

router.post('/register', contuser.register);
router.post('/login',contuser.login);
router.post('/forgotPassword',contuser.forgotPassword);
router.post('/resetPassword',contuser.resetPassword);



module.exports = router;