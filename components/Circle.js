import React, { PropTypes } from 'react'

const Circle = (props) => (
  <circle {...props}>{props.children}</circle>
)

Circle.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired
}

export default Circle
