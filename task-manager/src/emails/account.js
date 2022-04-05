
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cesarantoniocasares@hotmail.com',
        subject: "Thanks for joining in!",
        text:`Welcome to the app, ${name} Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cesarantoniocasares@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}, I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// const msg = {
//   to: 'cacjmuse@gmail.com"', // Change to your recipient
//   from: 'cesarantoniocasares@hotmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// const sendWelcomeEmail = (email, name) => {
//     to: email, // Change to your recipient
//     from: 'cesarantoniocasares@hotmail.com', // Change to your verified sender
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// })
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })