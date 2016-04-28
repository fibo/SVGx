import React, { PropTypes } from 'react'

const Svg = ({width, height}) => {
  return (
    <svg
      xmlns='http://www.w3.org/svg/2000'
      width={width}
      height={height}
    >
    </svg>
  )
}

Svg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Svg
