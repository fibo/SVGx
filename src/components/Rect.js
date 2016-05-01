import React, { PropTypes } from 'react'

import forceClosingTag from './forceClosingTag'

const Rect = (props) => {
  return (
    <rect {...props}>{forceClosingTag}{props.children}</rect>
  )
}

Rect.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Rect
