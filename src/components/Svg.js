import React, { PropTypes } from 'react'

const Svg = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
    >
      {props.children}
    </svg>
  )
}

Svg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Svg
