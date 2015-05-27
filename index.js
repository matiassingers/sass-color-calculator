'use strict';

var colorDiff = require('color-delta');
var reduce = require('lodash.reduce');

module.exports = function(base, target, decimals){
  var diff = colorDiff(base, target);

  diff = reduce(diff, function(result, value, key) {
    result.unshift('(');

    if (key === 'hue') {
      result.unshift('adjust-hue');
    }

    if (key === 'saturation') {
      result.unshift((value > 0 ? 'desaturate' : 'saturate'));
      value = Math.abs(value) * 100;
    }

    if (key === 'lightness') {
      result.unshift((value > 0 ? 'darken' : 'lighten'));
      value = Math.abs(value) * 100;
    }

    // Poor-mans Number.isInteger polyfill
    value = value.toFixed(Math.floor(decimals) === decimals ? decimals : 4);
    result.push(', ', value, ')');

    return result;
  }, [base]);

  return diff.join('');
};
