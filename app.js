/* global process */
var express = require('express');
var app = module.exports = express();

app.get('/', function (req, res) {
	res.body = 'hello world';
	res.send();
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port, function () {
	console.log('Running API on localhost:' + port);
});