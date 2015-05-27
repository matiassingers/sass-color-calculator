'use strict';

var assert = require('assert');
var sassColorCalculator = require('./');

describe('initial', function() {
  it('should work with lighten, desaturate and adjust-hue', function() {
    var result = sassColorCalculator('#bada55', '#b0bca7');

    assert.equal(result, 'lighten(desaturate(adjust-hue(#bada55, 19.8496), 50.7028), 10.1961)');
  });

  it('should work with darken, desaturate and adjust-hue', function() {
    var result = sassColorCalculator('#ec008c', '#9f0962');

    assert.equal(result, 'darken(desaturate(adjust-hue(#ec008c, -0.0068), 10.7143), 13.3333)');
  });

  it('should work with darken, saturate and adjust-hue', function() {
    var result = sassColorCalculator('#bada55', '#4f0344', 0);

    assert.equal(result, 'darken(saturate(adjust-hue(#bada55, 234), 28), 43)');
  });

  it('should throw an error if `base` is missing', function() {
    assert.throws(function() {
      sassColorCalculator();
    }, /valid color/);
  });

  it('should throw an error if `target` is missing', function() {
    assert.throws(function() {
      sassColorCalculator('#BADA55');
    }, /valid color/);
  });
});
