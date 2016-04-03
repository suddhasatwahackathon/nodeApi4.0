var express = require('express');
var app     = express();
app.use('/app', express.static('app'));
app.use('/bower_components', express.static('bower_components'));
var nodemailer = require('nodemailer');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var mongoUri = 'mongodb://suddha:satwa900@ds055525.mlab.com:55525/sbdb';  //local
//var mongoUri = 'mongodb://suddha:satwa900@ds015780.mlab.com:15780/heroku_hzcv8fd5'; //production

mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service : "gmail",
  auth    : {
    user     : "suddha90@gmail.com",

    // neither of these work
    pass : "satwa900900",
    // pass : 'my"annoying\'password',
  }
});
function mailSender(toEmail){
// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Slipbeep" <support@slipbeep.com>', // sender address
	    to: toEmail, // list of receivers
	    subject: "Thanks for subscribing", // Subject line
	    text: "Thanks for subscribing", // plaintext body
	    html: "<p>All Gaadi solutions there when we will be finally here.</p><p>Subscribe early for , Free services, Mega cashbacks & discounts After subscription of the subscriber.Thanks for ur interest, we will notify u.</p><pThanks Slipbeep</p>" // html body
		}
	return mailOptions;
}

var allowCrossDomain = function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./src/model/subscription');
require('./src/routes')(app);
//app.use(express.logger('dev'));
app.get('/', function(req, res) {
  console.log('welcome to apiss');
    res.send('welcome to api');
});
app.post('/mail', function(req, res) {
    //console.log(res);
   // send mail with defined transport object
   mailOptions = mailSender(req.body.email);
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + req.body.email);
	    //return status:true;
	    res.send("message sent");
	});
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port')).on('error', function(err) { console.log(error)});
console.log('Magic happens on',app.get('port'));