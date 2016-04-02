module.exports = function(app){
  var subscriptions = require('./controller/subscription');
  app.get('/subscriptions', subscriptions.findAll); 
  app.get('/subscriptions/:id', subscriptions.findById); 
  app.put('/subscriptions/:id', subscriptions.update);
  app.post('/subscriptions', subscriptions.add);
  app.delete('/subscriptions/:id', subscriptions.delete);
  app.get('/import', subscriptions.import);  

  app.get('/hello', function(req, res) {
      res.send('Hello New York\n');
  });

};