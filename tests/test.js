/* global describe */
/* global it */

var should = require('should');

describe('User', function () {
  describe('Save', function () {
    var tests = [
      { description: 'one user' },
      { description: 'two users' },
      { description: 'many users' },
    ];

    tests.forEach(function (element) {
      it(element.description, function () {
        true.should.equal(true);
      });
    });
  });
});