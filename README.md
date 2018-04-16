# SVGx

> is a universal SVG renderer

[Description](#description) |
[Installation](#installation) |
[Usage](#usage) |
[Api](#api) |
[License](#license)

[![NPM version](https://badge.fury.io/js/svgx.svg)](http://badge.fury.io/js/svgx)
[![Build Status](https://travis-ci.org/fibo/SVGx.svg?branch=master)](https://travis-ci.org/fibo/SVGx?branch=master)
[![Dependency Status](https://david-dm.org/fibo/svgx.svg)](https://david-dm.org/fibo/svgx)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Change log](https://img.shields.io/badge/change-log-blue.svg)](http://g14n.info/SVGx/changelog)

## Description

Thanks to React it is feasible to achieve server side rendering SVG. However,
there are few common pit falls. In order to avoid them this package implements
the following features:

* Optionally prepend doctype.
* Optionally inject `xmlns` and `xmlns:xlink` attributes.
* Optionally inject a `style` tag.

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

## Usage

Installing `react` and `react-dom` is up to you: `svgx` does not declare
them as dependencies, cause you could use a different version or even
other React-like engine. Same logic applies to awesome babel packages, you
could use any other transpiler.

Anyway, to get the job done, you can do

```bash
npm install react react-dom babel-cli babel-env --save-dev
```

Then run the following script with babel.

```javascript
#!/usr/bin/env babel-node

import React from 'react'
import reactDom from 'react-dom/server'
import svgx from 'svgx'

const render = svgx(reactDom.renderToStaticMarkup)

const jsx = (
  <svg width={200} height={200}>
    <circle cx={100} cy={100} r={50} />
  </svg>
)

const svgOutput = render(jsx)

console.log(svgOutput)
```

## API

### `render = svgx(renderer)`

> Static render function: it works server side.

* @param {Object} renderer, for instance `reactDom.renderToStaticMarkup`
* @return {Function} render

### `render(jsx[, opts])`

> Static render function: it works server side.

* @param {ReactElement} jsx to be rendered.
* @param {Object} [opts]
* @param {Boolean} [opts.doctype] add xml and doctype header, defaults to `true`.
* @param {String} [opts.style] injects given CSS in a style tag.
* @param {Boolean} [opts.xmlns] add namespace attributes, defaults to `true`.

## License

[MIT](http://g14n.info/mit-license/)

[example_js]: https://github.com/fibo/SVGx/blob/master/example.js
[example_svg]: https://g14n.info/SVGx/example.svg
