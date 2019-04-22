/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    -controller.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 09/04/2019
 **************************************************************************************************/
var userService = require('../services/services');
var jwt = require('jsonwebtoken');
var gentoken = require('../middleware/token');
var sendmail = require('../middleware/sendmail');   
module.exports.register= (req, res) => {
    req.checkBody('firstname', 'Firstname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('lastname', 'Lastname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 8 }).equals(req.body.cpassword);
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
 } else {
    userService.register(req.body, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                message: err
            })
        } else {
            console.log(data);
            return res.status(200).send({
                message: data
            })
        }
    })
}
}
module.exports.login = (req, res) => {
    console.log("req in controller", req.body);

    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 4 });
    var secret = "adcgfft";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        userService.login(req.body, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                var token = jwt.sign({ email: req.body.email, id: data[0]._id }, secret, { expiresIn: 64000008 });
                return res.status(200).send({
                    message: data,
                    "token": token
                });
            }
        });
    }

};



exports.forgotPassword = (req, res) => {
    var responseResult = {};
    userService.forgotPassword(req.body, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            responseResult.success = true;
            responseResult.result = result;

            const payload = {
                user_id: responseResult.result._id
            }
            console.log(payload);
            const obj = gentoken.GenerateToken(payload);
            console.log("controller obj", obj);
            const url = `http://localhost:3000/#!/resetPassword/${obj.token}`;
            sendmail.sendEmailFunction(url,req.body.email);
            //Send email using this token generated
            res.status(200).send(url);
        }
    })
}
exports.resetPassword = (req, res) => {
    var responseResult = {};
    userService.resetPass(req, (err, result) => {
        if (err) {
            responseResult.success = false;
            responseResult.error = err;
            res.status(500).send(responseResult)
        }
        else {
            console.log('in user ctrl token is verified giving response');
            responseResult.success = true;
            responseResult.result = result;
            res.status(200).send(responseResult);
        }
    })
}


module.exports.getAllUser = (req,res) => {
    userService.getAllUser(req, (err, data) => {
        var response = {};
        if (err) {
            return callback(err);
        } else {
          //  console.log("log==>",data);
            response.success = true;
            response.result = data;
            res.status(200).send(response);
        
        }
    })
};


