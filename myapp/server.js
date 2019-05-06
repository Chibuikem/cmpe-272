var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + port);
});