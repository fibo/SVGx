'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = exports.Svg = exports.render = undefined;

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

var _Svg = require('./components/Svg');

var _Svg2 = _interopRequireDefault(_Svg);

var _Rect = require('./components/Rect');

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.render = _render2.default;
exports.Svg = _Svg2.default;
exports.Rect = _Rect2.default;