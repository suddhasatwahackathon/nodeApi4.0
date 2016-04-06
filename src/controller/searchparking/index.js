var searchparkingobj = require('./../../model/searchparking');
exports.findAll = function(req, res){
  searchparkingobj.findAllObj(res);
};

exports.findById = function(req, res){
  var id = req.params.id;
  searchparkingobj.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  searchparkingobj.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d subscriptions', numberAffected);
    return res.send(raw);
  });
}

exports.add = function(req, res, next) {
  searchparkingobj.addObj(req, res);
}

exports.delete = function(req, res){
  var id = req.params.id;
  searchparkingobj.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  searchparkingobj.create( 
    { "email": "Ben" },
    { "email": "Mike D."},
    { "email": "Eric"},
    { "email": "Paul"}             
  , function (err) {
    if (err) return console.log(err); 
    return res.send(202);
  });
};