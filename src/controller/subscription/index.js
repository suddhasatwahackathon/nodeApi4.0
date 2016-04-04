var subscriptionsObj = require('./../../model/subscription');
var mailerTransport = require('./../../common/nodemailer').transporterObj;
exports.findAll = function(req, res){
  subscriptionsObj.findAllObj(res);
};

exports.findById = function(req, res){
  var id = req.params.id;
  subscriptionsObj.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  subscriptionsObj.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d subscriptions', numberAffected);
    return res.send(raw);
  });
}

exports.add = function(req, res, next) {
  var sendMail = require('./../../common/nodemailer').sendmail(req.body.email);  
/*  subscriptionsObj.create(req.body, function (err, subscriptions) {
    if (err) return console.log(err); 
    var sendMail = require('./../../common/nodemailer').sendmail(req.body.email);
    mailerTransport.sendMail(sendMail, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message info: ' + info);
        return res.send(info);        
    });    
    //return res.send(subscriptions);          
  });*/
  subscriptions.addObj(req, res, sendMail, mailerTransport);
}

exports.delete = function(req, res){
  var id = req.params.id;
  subscriptionsObj.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  subscriptionsObj.create( 
    { "email": "Ben" },
    { "email": "Mike D."},
    { "email": "Eric"},
    { "email": "Paul"}             
  , function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};