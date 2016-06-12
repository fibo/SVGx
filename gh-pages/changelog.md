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

## [Unreleased]

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
  [{{ current }}]: https://github.com/fibo//SVGx/compare/{{ previous }}...{{ current }}
{% endfor %}
