(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'cheerio', 'react-dom/server'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('cheerio'), require('react-dom/server'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.cheerio, global.server);
    global.svgx = mod.exports;
  }
})(this, function (module, exports, _cheerio, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _cheerio2 = _interopRequireDefault(_cheerio);

  var _server2 = _interopRequireDefault(_server);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var doctype = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n';
  var render = function render(jsx) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var svgx = _server2.default.renderToStaticMarkup(jsx);

    var $ = _cheerio2.default.load(svgx, { xmlMode: true });

    var $svg = $('svg');

    // Currently, React strips off namespace attributes.
    if (opts.xmlns) {
      $svg.attr('xmlns', 'http://www.w3.org/2000/svg');
      $svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    }

    var result = $.html();

    if (opts.doctype) result = doctype + result;

    return result;
  };

  exports.default = render;
  module.exports = exports['default'];
});
