#!/usr/bin/env babel-node

import React from 'react'
import fs from 'fs'
import path from 'path'
import { render, Svg, Rect } from 'svgx'

const opts = { doctype: true, xmlns: true }

const jsx = (
  <Svg width={100} height={100}>
    <Rect x={10} y={10} width={50} height={50}/>
  </Svg>
)

const svgOutput = render(jsx, opts)

const filePath = path.join(__dirname, 'gh-pages/example.svg')

fs.writeFile(filePath, svgOutput, 'utf8', (err) => {
  if (err) throw err

  console.log(`See file ${filePath}`)
})
