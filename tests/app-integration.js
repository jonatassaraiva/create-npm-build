/* global describe */
/* global it */

var app = require('../app'),
	request = require('supertest');
	
describe('Site', function () {
	
	it('has a nice welcoming message', function (done) {
		request(app)
			.get('/')
			.expect('hello world')
			.end(function (err, res) {
				if (err)
					done(err);
				else
					done();
			});
	});
});