var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var searchParkingschema = new Schema({
  address: String,
  landmark: String,
  country: String,
  zip: Number
});
searchparking = mongoose.model('Searchparking', searchParkingschema,'searchParking');
exports.findAllObj = function(res){
  searchparking.find({},function(err, results) {    
    return res.send(results);
  });
}
exports.addObj = function(req,res) {
  searchparking.create(req.body, function (err, results) {
    if (err) return console.log(err); 
    res.send(results);    
  });
}
