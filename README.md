# SVGx

> is a universal SVG renderer

[Description](#description) |
[Installation](#installation) |
[Usage](#usage) |
[Api](#api) |
[License](#license)

[![NPM version](https://badge.fury.io/js/svgx.svg)](http://badge.fury.io/js/svgx)
[![Build Status](https://travis-ci.org/fibo/SVGx.svg?branch=master)](https://travis-ci.org/fibo/SVGx?branch=master)
[![No deps](https://img.shields.io/badge/dependencies-none-green.svg)](https://github.com/fibo/SVGx)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Change log](https://img.shields.io/badge/change-log-blue.svg)](http://g14n.info/SVGx/changelog)

## Description

Thanks to React it is feasible to achieve server side rendering SVG. However,
there is a pit fall: doctype is missing. This package prepends a doctype to generated SVG.

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
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={200} height={200}
  >
    <circle cx={100} cy={100} r={50} />
  </svg>
)

const svgOutput = render(jsx)

console.log(svgOutput)
```

**NOTA BENE**: Attributes `xmlns` and `xmlnsXlink` are **mandatory** to get a valid SVG file.

## API

### `svgxRender = svgx(jsxRender)`

> Get your svgx wrapper.

```javascript
/**
  * @param {Function} jsxRender function, for instance `reactDom.renderToStaticMarkup`
  * @return {Function} svgxRender wrapper
  */
```

### `svgxRender(jsx[, opts])`

> Wrapper for static JSX render function: it works server side.

```javascript
/**
  * @param {ReactElement} jsx to be rendered.
  * @param {Object} [opts] Options can be omitted, just ignore them and it will work fine.
  * @param {String} [opts.doctype] defaults to a common SVG doctype. You can remove it by setting it to the blank string `''` or any other doctype you need.
  * @return {String} markup in SVG format
  */
```

## License

[MIT](http://g14n.info/mit-license/)

[example_js]: https://github.com/fibo/SVGx/blob/master/example.js
[example_svg]: https://g14n.info/SVGx/example.svg
