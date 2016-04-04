var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var subscriptionschema = new Schema({
  email: String
});
subscriptions = mongoose.model('Subscription', subscriptionschema,'subscription');
module.exports = subscriptions;
exports.findAll = function(){
  subscriptions.find({},function(err, results) {
    return res.send(results);
  });
}