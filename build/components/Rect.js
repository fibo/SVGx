'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rect = function Rect(props) {
  return _react2.default.createElement(
    'rect',
    props,
    props.children
  );
};

Rect.propTypes = {
  x: _react.PropTypes.number,
  y: _react.PropTypes.number,
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired
};

exports.default = Rect;