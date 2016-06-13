# SVGx

> is a universal SVG renderer

[![NPM version](https://badge.fury.io/js/svgx.svg)](http://badge.fury.io/js/svgx) [![Build Status](https://travis-ci.org/fibo/SVGx.svg?branch=master)](https://travis-ci.org/fibo/SVGx?branch=master) [![Dependency Status](https://david-dm.org/fibo/svgx.svg)](https://david-dm.org/fibo/svgx) [![Change log](https://img.shields.io/badge/change-log-blue.svg)](http://g14n.info/SVGx/changelog)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[Description](#description) |
[Installation](#installation) |
[Api](#api) |
[License](#license)

## Description

SVGx is at a very early stage.

> Every feedback/contribution is welcome!

Thanks to React it is feasible to achieve server side rendering SVG. However,
there are few common pit falls. In order to avoid them this package implements
the following features:

* Optionally prepend doctype.
* Optionally inject `xmlns` and `xmlns:xlink` attributes.

Actually, this package is also a recipe to *render and test SVG server side*.

You can try this [example.js][example_js] script, by launching commands

```bash
git clone https://github.com/fibo/SVGx.git
cd SVGx
npm install
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

### `svgx.render(jsx[, opts])`

> Static render function: it works server side.

* **@param** `{ReactElement}` jsx
* **@param** `{Object}` [opts]
* **@param** `{Boolean}` [opts.doctype]
* **@param** `{Boolean}` [opts.xmlns]

## License

[MIT](http://g14n.info/mit-license/)

[example_js]: https://github.com/fibo/SVGx/blob/master/example.js
[example_svg]: https://g14n.info/SVGx/example.svg
