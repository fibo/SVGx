import React, { PropTypes } from 'react'

const Svg = (props) => {
  return (
    <svg {...props}>{props.children}</svg>
  )
}

Svg.propTypes = {
  contentStyleType: PropTypes.string,
  height: PropTypes.number.isRequired,
  version: PropTypes.string,
  width: PropTypes.number.isRequired
}

Svg.defaultProps = {
  version: '1.0'
}

export default Svg
