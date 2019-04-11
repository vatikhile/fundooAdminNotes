var userService = require('../services/services');
var jwt = require('jsonwebtoken');
var gentoken = require('../middleware/token');
var sendmail = require('../middleware/sendmail');   
module.exports.register= (req, res) => {
    req.checkBody('firstname', 'Firstname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('lastname', 'Lastname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'password is not valid').isLength({ min: 4 }).equals(req.body.password);
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
module.exports. forgotPassword = (req, res) => {

    req.checkBody('email', 'Email is not valid').isEmail();
    var secret = "adcgfft";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        userService.forgotPassword(req.body, (err, data) => {
            var responses = {};

            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                console.log(req.body);
                responses.success = true;
                responses.result = data;

                console.log("data in controller=>", data[0]._id);


                const payload = {
                        user_id: data[0]._id
                    }
                    //  console.log(payload);
                const obj = gentoken.GenerateToken(payload);
                const url = `http://localhost:3000/resetPassword/${obj.token}`;
                console.log("url in controller", url);

                sendmail.sendEmailFunction(url,req.body.email);

                res.status(200).send(url);



            }
        });
    }
};

module.exports.resetPassword = (req, res) => {
    console.log("inside forgotPassword");
    req.checkBody('password', 'password is not valid').isLength({ min: 4 });
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        userService.resetPassword(req.body, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send({
                    message: err
                })
            } else {
                return res.status(200).send({
                    message: data
                });
            }

        });

    }
};
