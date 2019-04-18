const chatModel = require('../model/chatmodel');

module.exports.addMessage = (req, callback) => {

    console.log("request in service");

    chatModel.addMessage(req, (err, data) => {

        if (err) {
            console.log("ERROR: in service", err);
            callback(err)
        } else {

            console.log("data in service", data);
            callback(null, data)
        }

    })

}
module.exports.getUserMsg = (req, callback) => {
    
    chatModel.getUserMsg(req, (err, data) => {
        if (err) {
            console.log("chat services isn't working");
            return callback(err);
        } else {
            console.log("chat service works")
           return callback(null, data);
        }
    })
}