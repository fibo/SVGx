import React from 'react'
import reactDom from 'react-dom/server'
import svgx from 'svgx'
import test from 'tape'

const render = svgx(reactDom.renderToStaticMarkup)

test('svgx.render(jsx)', (t) => {
  const height = 100
  const width = 100

  const el = <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={width} height={height}
  />

  t.equal(
    render(el),
    [
      '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
      '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"></svg>'
    ].join('\n')
  )

  t.end()
})
