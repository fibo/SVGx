import React, { PropTypes } from 'react'

const Rect = (props) => {
  return (
    <rect {...props}>{props.children}</rect>
  )
}

Rect.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Rect
