# sass-color-calculator [![Build Status](http://img.shields.io/travis/matiassingers/sass-color-calculator.svg?style=flat-square)](https://travis-ci.org/matiassingers/sass-color-calculator) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/sass-color-calculator.svg?style=flat-square)](https://gemnasium.com/matiassingers/sass-color-calculator) [![Coverage Status](http://img.shields.io/coveralls/matiassingers/sass-color-calculator.svg?style=flat-square)](https://coveralls.io/r/matiassingers/sass-color-calculator)
> calculate the Sass color functions required to get one color from a base color

Accepts almost all types of color strings, see [color-delta](https://github.com/matiassingers/color-delta) for more info.

Partially extracted from [Sass Colour Function Calculator](http://razorjam.github.io/sasscolourfunctioncalculator/).


## Install

```sh
$ npm install --save sass-color-calculator
```


## Usage

```js
var sassColorCalculator = require('sass-color-calculator');

sassColorCalculator('#BADA55', '#B0BCA7');
// => "lighten(desaturate(adjust-hue(#BADA55, 19.8496), 50.7028), 10.1961)"
```


## CLI

```sh
$ npm install --global sass-color-calculator
```

```sh
$ sass-color-calculator --help

  calculate the Sass color functions required to get one color from a base color

  Example
    sass-color-calculator BADA55 B0BCA7
    => lighten(desaturate(adjust-hue(BADA55, 19.8496), 50.7028), 10.1961)
```


## API


### sassColorCalculator(base, target, [decimals])

#### base

*Required*  
Type: `String`  

Base color to calculate difference from.

#### target

*Required*  
Type: `String`  

Target color to calculate difference to.

#### decimals

*Optional*  
Type: `String`  

Fixed number of decimals in returned values.


## Related
- [`color-delta`](https://github.com/matiassingers/color-delta)


## License

MIT © [Matias Singers](http://mts.io)
