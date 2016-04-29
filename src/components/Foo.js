import React, { PropTypes } from 'react'

const Foo = ({width, height}) => {
  return (
    <svg xmlns='http://www.w3.org/svg/2000'
      width={width}
      height={height}
    >
      <rect x={10} y={10} height={10} width={10} />
    </svg>
  )
}

Foo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Foo
