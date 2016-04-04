var subscriptions = require('./../../model/subscription');
var nodemailer = require('nodemailer');
//require('./../../common/nodemailer');
// create reusable transporter object using the default SMTP transport
/*var transporter = nodemailer.createTransport({
  service : "gmail",
  auth    : {
    user     : "suddha90@gmail.com",

    // neither of these work
    pass : "satwa900900",
    // pass : 'my"annoying\'password',
  }
});*/
/*function mailSender(toEmail){
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
*/
exports.findAll = function(req, res){
  subscriptions.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  subscriptions.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  subscriptions.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d subscriptions', numberAffected);
    return res.send(raw);
  });
}

exports.add = function(req, res, next) {
  subscriptions.create(req.body, function (err, subscriptions) {
    if (err) return console.log(err); 
    //mailOptions = mailSender(req.body.email);   
    var transporter = nodemailer.createTransport({
      service : "gmail",
      auth    : {
        user     : "slipbeepnodemailer@gmail.com",

        // neither of these work
        pass : "nodemailer@12345",
        // pass : 'my"annoying\'password',
      }
    });    
    var mailOptions = {
        from: '"Slipbeep" <support@slipbeep.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Thanks for subscribing", // Subject line
        text: "Thanks for subscribing", // plaintext body
        html: "<p>All Gaadi solutions there when we will be finally here.</p><p>Subscribe early for , Free services, Mega cashbacks & discounts After subscription of the subscriber.Thanks for ur interest, we will notify u.</p><pThanks Slipbeep</p>" // html body
      }         
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message info: ' + info);
        return res.send(info);        
    });    
    //return res.send(subscriptions);          
  });
}

exports.delete = function(req, res){
  var id = req.params.id;
  subscriptions.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  subscriptions.create( 
    { "email": "Ben" },
    { "email": "Mike D."},
    { "email": "Eric"},
    { "email": "Paul"}             
  , function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};