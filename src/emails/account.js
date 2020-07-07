
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const senderEmail= 'akashdas1126@gmail.com'

// sgMail.send({
//     to: 'akashdasyo.cool@gmail.com',
//     from: 'akashdas1126@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name}.Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Leaving Already?',
        text: `We are so sorry ${name} that we werent able to help you out. Please let us know how we can improve`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}