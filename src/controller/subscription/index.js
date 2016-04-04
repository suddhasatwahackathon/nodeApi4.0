var subscriptions = require('./../../model/subscription');
var nodemailer = require('./../../common/nodemailer');
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
   mailOptions = mailSender(req.body.email);
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + req.body.email);
        return res.send(subscriptions);        
    });    
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