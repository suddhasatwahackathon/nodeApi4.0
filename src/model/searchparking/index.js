var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var searchParkingschema = new Schema({
  email: String
});
subscriptions = mongoose.model('Searchparking', searchParkingschema,'searchParking');
exports.findAllObj = function(res){
  subscriptions.find({},function(err, results) {    
    return res.send(results);
  });
}
exports.addObj = function(req,res) {
  subscriptions.create(req.body, function (err, results) {
    if (err) return console.log(err); 
    res.send(results);    
  });
}
