/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - sendmail.js
 *@author  - Vaibhaw Tikhile <vaibhawatikhile@gmail.com>
 *@version - 1.0
 *@since   - 09/04/2019
 **************************************************************************************************/
const nodemailer = require('nodemailer');
exports.sendEmailFunction = (url,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tikhilevaibhaw19@gmail.com',
            pass: 'vaibhaw@123'
        },
    });
    const mailOptions = {
        from: 'tikhilevaibhaw19@gmail.com',
        to: email,
        subject: 'Chat-app password reset link ',
        text: 'Click on the link provided to reset your password:\n\n' + url
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Invalid username or password");
            console.log("ERROR: while sending the mail", err)
        }
        else
            console.log('Information regarding the mail sent', info);
    });
}