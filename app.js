/* global process */
var express = module.exports = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('hello world');
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port, function () {
	console.log('Running server on localhost:' + port);
});

module.exports = app;