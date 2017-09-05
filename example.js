#!/usr/bin/env babel-node

import React from 'react'
import reactDom from 'react-dom/server'
import fs from 'fs'
import path from 'path'
import svgx from 'svgx'

const render = svgx(reactDom.renderToStaticMarkup)

const jsx = (
  <svg viewBox='0 0 800 400'>
    <rect
      x={510} y={10}
      width={200} height={200}
      fill={'gold'}
      style={{ stroke: 'black', strokeWidth: 1 }}
    />
    <circle
      className='hot'
      cx={210} cy={270} r={50}
    />
  </svg>
)

const svgOutput = render(jsx, {
  style: '.hot { fill: hotpink; stroke: darkgrey; stroke-width: 2 }'
})

const filePath = path.join(__dirname, 'docs/example.svg')

fs.writeFile(filePath, svgOutput, 'utf8', (err) => {
  if (err) throw err

  console.log(`See file ${filePath}`)
})
