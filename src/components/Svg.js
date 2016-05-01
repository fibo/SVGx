import React, { PropTypes } from 'react'

const Svg = (props) => {
  return (
    <svg
      contentStyleType={props.contentStyleType}
      height={props.height}
      width={props.width}
    >
      {props.children}
    </svg>
  )
}

Svg.propTypes = {
  contentStyleType: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

Svg.defaultProps = {
  contentStyleType: 'text/css'
}

export default Svg
