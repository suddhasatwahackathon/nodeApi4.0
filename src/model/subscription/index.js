var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SubscriptionSchema = new Schema({
  email: String
});
module.exports = mongoose.model('subscription', SubscriptionSchema);