
var userModel = require('../model/userModel');
//Register purpose
exports.register = (req, callback) => {
        userModel.register(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
    //Login purpose
exports.login = (req, callback) => {
        userModel.login(req, (err, data) => {
            if (err) {
                return callback(err);
            } else {
                return callback(null, data);
            }
        })
    }
//forget purpose
    exports.forgotPassword=(data,callback)=>{
        userModel.forgotPassword(data,(err,result)=>{
            if(err){
                callback(err);
            }else {
                callback(null,result)
            }
        })
    }
    //reset purpose
    exports.resetPass=(req,callback)=>{
        userModel.updateUserPassword(req,(err,result)=>{
            if(err){
                callback(err);
            }else {
                callback(null,result)
            }
        })
    }
   
exports.getAllUser = (req, callback) => {
    userModel.getAllUser(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}