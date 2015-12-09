/* global process */
var app = require('express')();

app.get('/', function(req, res) {
  res.send('hello world');
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port, function () {
	console.log('Running API on localhost:' + port);
});