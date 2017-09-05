---
title: svgx
---
# SVGx

> is a universal SVG renderer

[![NPM version](https://badge.fury.io/js/svgx.svg)](http://badge.fury.io/js/svgx)
[![Build Status](https://travis-ci.org/fibo/SVGx.svg?branch=master)](https://travis-ci.org/fibo/SVGx?branch=master)
[![Dependency Status](https://david-dm.org/fibo/svgx.svg)](https://david-dm.org/fibo/svgx)
[![Greenkeeper badge](https://badges.greenkeeper.io/fibo/SVGx.svg)](https://greenkeeper.io/)
[![Change log](https://img.shields.io/badge/change-log-blue.svg)](http://g14n.info/SVGx/changelog)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[Description](#description) |
[Installation](#installation) |
[Usage](#usage) |
[Api](#api) |
[License](#license)

## Description

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

## Usage

Installing `react` and `react-dom` is up to you: `svgx` does not declare
them as dependencies, cause you could use a different version or even
other React-like engine.

For instance do

```bash
npm install react react-dom babel-cli
```

Then run the following script with babel.

```jsx
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

const svgOutput = render(jsx, { doctype: true, xmlns: true })

console.log(svgOutput)
```

## API

### `render = svgx(renderer)`

> Static render function: it works server side.

* @param {Object} renderer, for instance `reactDom.renderToStaticMarkup`
* @return {Function} render

### `render(jsx[, opts])`

> Static render function: it works server side.

* @param {ReactElement} jsx
* @param {Object} [opts]
* @param {Boolean} [opts.doctype]
* @param {Boolean} [opts.responsive]
* @param {Boolean} [opts.xmlns]

## License

[MIT](http://g14n.info/mit-license/)

[example_js]: https://github.com/fibo/SVGx/blob/master/example.js
[example_svg]: https://g14n.info/SVGx/example.svg
