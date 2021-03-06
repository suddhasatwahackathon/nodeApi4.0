var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var subscriptionschema = new Schema({
  email: String
});
subscriptions = mongoose.model('Subscription', subscriptionschema,'subscription');
exports.findAllObj = function(res){
  subscriptions.find({},function(err, results) {    
    return res.send(results);
  });
}
exports.addObj = function(req,res, sendMail, mailerTransport) {
  subscriptions.create(req.body, function (err, results) {
    if (err) return console.log(err); 
    mailerTransport.sendMail(sendMail, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message info: ' + info);
        return res.send(info);        
    });    
  });
}
