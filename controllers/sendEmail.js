const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'chad39@ethereal.email',
      pass: 'tBAuUFx6Tgp8tFDj42',
    },
  })

  let info = await transporter.sendMail({
    from: '"alou" <alou@gmail.com>',
    to: 'hoangthai2792000@gmail.com',
    subject: 'Alou nè',
    html: '<h2>cc</h2>',
  })

  res.json(info)
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'cc@gmail.com', // Change to your recipient
    from: 'cc@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  const info = await sgMail.send(msg)
  res.json(info)
}

module.exports = sendEmail
