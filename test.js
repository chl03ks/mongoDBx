var assert = require('assert');

describe('My Feature', function () {
  it('works', function () {
    assert.equal('A','A');
  });
  it('it fails gracefully', function () {
    assert.throws(function () {
      throw 'Error!';
    })
  });
});

describe('My Other Feature', function () {
  it('async', function (done) {
    setTimeout(function () {
      done();
    }, 25);
  });
});
