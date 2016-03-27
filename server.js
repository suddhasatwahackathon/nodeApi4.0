var express = require('express');
var app     = express();

app.use('/app', express.static('app'));
app.use('/bower_components', express.static('bower_components'));
var nodemailer = require('nodemailer');
var bodyParser =    require("body-parser");
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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //next();
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/
//app.use(allowCrossDomain);
app.get('/', function(req, res) {
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
app.listen(8000);
console.log('Magic happens on 8000');