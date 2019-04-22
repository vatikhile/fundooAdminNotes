/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - index.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 9/04/2019
 **************************************************************************************************/
const jwt = require('jsonwebtoken')
exports.checkToken = (req, res, next) => {
    var token1 = req.headers['token']; //decode token
    if (token1) {
        //verify secret and checks exp 
        jwt.verify(token1, 'secretkey',
            (err, decoded) => {
                if (err) {
                    return res.send({

                        sucess: false,
                        message: "token is not valid"

                    })

                }
                //req decoded and next will pass the controller
                else {
                    req.decoded = decoded;
                    next();
                }
            });

    }
    else {
        //if there is no token return an error
        return res.send(
            {
                sucess: false,
                message: "No token provided"

            })
    }


}