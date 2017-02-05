#!/usr/bin/env babel-node

import React from 'react'
import reactDom from 'react-dom/server'
import fs from 'fs'
import path from 'path'
import svgx from 'svgx'

const render = svgx(reactDom.renderToStaticMarkup)

const opts = { doctype: true, xmlns: true }

const jsx = (
  <svg width={200} height={200}>
    <rect
      x={10} y={10}
      width={50} height={50}
      fill={'gold'}
      style={{ stroke: 'black', strokeWidth: 1 }}
    />
    <circle
      cx={110} cy={70} r={50}
      fill={'hotpink'}
      style={{ stroke: 'darkgrey', strokeWidth: 2 }}
    />
  </svg>
)

const svgOutput = render(jsx, opts)

const filePath = path.join(__dirname, 'gh-pages/example.svg')

fs.writeFile(filePath, svgOutput, 'utf8', (err) => {
  if (err) throw err

  console.log(`See file ${filePath}`)
})
