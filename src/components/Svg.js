import React, { PropTypes } from 'react'

const Svg = (props) => {
  return (
    <svg {...props}>{props.children}</svg>
  )
}

Svg.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

Svg.defaultProps = {
  contentStyleType: 'text/css',
  version: '1.0'
}

export default Svg
