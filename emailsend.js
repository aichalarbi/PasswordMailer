
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com', 
    pass: 'hhhhhhhhhgfff',
  },
});

const mailOptions = {
  from: 'aichaarbi8@gmail.com', 
  to: 'arbiaicha04@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
