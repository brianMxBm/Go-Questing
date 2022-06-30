// TODO: Switch over to stable mail api's in production
/* eslint-disable */ //TODO: Not sure why this rule is affecting the import status?
const nodemailer = require('nodemailer');

exports.mailTransport = () =>
  nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD
    }
  });
