'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = function Svg(props) {
  return _react2.default.createElement(
    'svg',
    props,
    props.children
  );
};

Svg.propTypes = {
  contentStyleType: _react.PropTypes.string,
  height: _react.PropTypes.number.isRequired,
  version: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired
};

Svg.defaultProps = {
  version: '1.0'
};

exports.default = Svg;