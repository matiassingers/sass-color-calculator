#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var sassColorCalculator = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    sass-color-calculator BADA55 B0BCA7',
    '    => lighten(desaturate(adjust-hue(BADA55, 19.8496), 50.7028), 10.1961)'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(sassColorCalculator.apply(null, argv));
