import React, { PropTypes } from 'react'

import forceClosingTag from './forceClosingTag'

const Svg = (props) => {
  return (
    <svg {...props}>{forceClosingTag}{props.children}</svg>
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
