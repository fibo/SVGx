---
title: Change Log
permalink: /changelog
---

{% assign package = site.data.package %}
{% assign tags = site.data.tags %}

# Change Log

All notable changes to this project will be documented in this file.

<sub>This project adheres to [Semantic Versioning](http://semver.org/).
Changelog format adheres to [Keep a Changelog](http://keepachangelog.com/)</sub>

## [v2.1.0] - 2019-04-30

### Removed

- travis
- development dependencies

## [v2.0.0] - 2019-04-18

### Removed

- Now cheerio is not a dependency, see [issue 1](https://github.com/fibo/SVGx/issues/1).
- Optional `style` parameter is removed, the homonym JSX tag works fine, see *example.js* file.
- David dependency badge removed, now we have no deps.

## [v1.1.0] - 2018-04-16

### Added

- Updated deps.
- Using babel-env.
- Npm ignores docs/

### Removed

- Jekyll stuff.

## [v1.0.0] - 2017-09-30

### Added

- Updated deps, React, cheerio, etc... .
- Option parameter: `style`.

### Fixed

- Better documentation.
- Using docs/ folder instead of gh-pages/.
- Relaxed development dependencies.

### Removed

- greenkeeper integration

## [v0.7.2] - 2017-02-05

### Fixed

- Removed postpublish npm script, cause it run on install for npm `<5`.
- Removed template string.

## [v0.7.0] - 2017-02-05

### Changed

- React is not a declared dependency, but, it is injected as an argument.
- Using no transpiling, code is ES5 now. Babel is used only as a dev deps for the example.

## [v0.6.3] - 2017-01-27

### Added

- Updated deps

## [v0.6.2] - 2017-01-05

### Added

- Updated deps
- web site

## [v0.6.0] - 2016-06-13

### Changed

- Remove all components, they do not add value
- Simplify structure, make it minimal

### Added

- Restored babel build, it is the only way to get es6 import/export workign on Nodejs
- babel-plugin-transform-es2015-modules-umd
- updated deps

## [v0.5.1] - 2016-06-12

### Changed

- Downgraded cheerio from 0.21 to 0.20, due to [this issue](https://github.com/cheeriojs/cheerio/issues/872).

## [v0.5.0] - 2016-06-12

### Added

- Dynamic changelog
- Circle component
- update-deps npm script
- Deps update

### Changed

- Directory structure, moved src/ folder into root
- Removed transpiled build, only babel-node is supported
- Removed babel-tape-runner

## [v0.4.3] - 2016-05-11

### Added

- Transpile to Nodejs compatible code
- docs

## [v0.3.0] - 2016-05-01

### Added

- CHANGELOG.md
- render
- Svg component default props: version
- React component
- Inject xmlns attributes
- Prepend doctype
- gh-pages

## [v0.2.0] - 2016-06-28

### Added

- Svg component
- example.js

[Unreleased]: https://github.com/fibo//SVGx/compare/v{{ package.version }}...HEAD

{% for tag in tags offset:2 %}
  {% assign current = tags[forloop.index0].name %}
  {% assign previous = tags[forloop.index].name %}
  [{{ current }}]: https://github.com/fibo/SVGx/compare/{{ previous }}...{{ current }}
{% endfor %}
