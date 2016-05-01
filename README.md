# SVGx

> is a universal SVG renderer

[![NPM version](https://badge.fury.io/js/svgx.svg)](http://badge.fury.io/js/svgx) [![Build Status](https://travis-ci.org/fibo/SVGx.svg?branch=master)](https://travis-ci.org/fibo/SVGx?branch=master) [![Dependency Status](https://david-dm.org/fibo/svgx.svg)](https://david-dm.org/fibo/svgx) [![Change log](https://img.shields.io/badge/change-log-blue.svg)](https://github.com/fibo/SVGx/blob/master/CHANGELOG.md)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

* [Description](#description)
* [Installation](#installation)
* [Api](#api)
* [License](#license)

## Description

Thanks to React it is feasible to achieve server side rendering SVG. However,
some features are missing and server side rendering is not straightforward.
Actually, this package is also a recipe to *render and test SVG server side*.

You can try this [example.js][example_js] script, by launching commands

```bash
git clone https://github.com/fibo/SVGx.git
cd SVGx
npm install --production
npm run example
```

It generates the following SVG output

![SVG example][example_svg]

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install svgx
```

## API

### `svgx.Svg`

> Reusable React component, with sensible default props.

### `svgx.render(jsx[, opts])`

> Static render function, works server side.

## License

[MIT](http://g14n.info/mit-license/)

[example_js]: https://github.com/fibo/SVGx/blob/master/example.js
[example_svg]: https://cdn.rawgit.com/fibo/SVGx/master/example.svg
