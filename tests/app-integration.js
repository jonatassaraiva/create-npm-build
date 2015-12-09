/* global describe */
/* global it */

var app = require('../app'),
	request = require('supertest').agent(app);

describe('Site', function () {
	it('has a nice welcoming message', function (done) {
		request
			.get('/')
			.expect('hello world')
			.end(done());
	});
});