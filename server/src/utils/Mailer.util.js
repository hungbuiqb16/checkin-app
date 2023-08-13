const nodemailer = require('nodemailer')

const sendMail = (to, subject, htmlContent) => {

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "66130521a723fe",
            pass: "39a9f20841725f"
        }
    });

    const message = {
        from: 'no-reply 👻 <noreply@vcheckin.io>', // sender address
        to: to, // list of receivers
        subject: subject, // subject line
        text: 'Plantext version of the message', //plain text body
        html: htmlContent // html body
    }

    //return Promise -  send mail with defined transport object
    return transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = {
    sendMail
}