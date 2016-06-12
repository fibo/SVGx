#!/usr/bin/env babel-node

import React from 'react'
import fs from 'fs'
import path from 'path'
import { render, Svg, Rect, Circle } from 'svgx'

const opts = { doctype: true, xmlns: true }

const jsx = (
  <Svg width={200} height={200}>
    <Rect
      x={10} y={10}
      width={50} height={50}
      fill={'gold'}
      style={{ stroke: 'black', strokeWidth: 1 }}
    />
    <Circle
      cx={110} cy={70} r={50}
      fill={'hotpink'}
      style={{ stroke: 'darkgrey', strokeWidth: 2 }}
    />
  </Svg>
)

const svgOutput = render(jsx, opts)

const filePath = path.join(__dirname, 'gh-pages/example.svg')

fs.writeFile(filePath, svgOutput, 'utf8', (err) => {
  if (err) throw err

  console.log(`See file ${filePath}`)
})
