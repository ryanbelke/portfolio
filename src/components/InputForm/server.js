/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const nodemailer = require('nodemailer');
const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const util = require('util');
const bodyParser = require('body-parser');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use(bodyParser.json());
// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.post('/submit', (req,res,next) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const budget = req.body.budget;
  const information = req.body.information;

  console.log("login " + util.inspect(l));

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'LOGIN',
      pass: 'PASSWORD',
    }
  });

// setup email data with unicode symbols
  let mailOptions = {
    from: `email@email.com`, // sender address
    to: 'email@gmail.com' , // list of receivers
    subject: 'Message from Site ✔', // Subject line
    text: name, // plain text body
    html: `<b>${name} & ${email} & ${budget} & ${phoneNumber} & ${information} </b>` // html body
  };

// send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({message: 'Error'});

      return console.log(" mailer error " + error);
    }

    res.send({message: 'Success'});

    console.log('Message %s sent: %s', info.messageId, info.response);
  });


});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
