var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var subscriptionschema = new Schema({
  email: String
});
module.exports = mongoose.model('Subscription', subscriptionschema,'subscription');