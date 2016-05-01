#!/usr/bin/env babel-node

import React from 'react'
import fs from 'fs'
import path from 'path'
import { render, Svg } from 'svgx'

const opts = { doctype: true }

const jsx = (
  <Svg width={100} height={100} >
    <rect x={10} y={10} width={50} height={50} />
  </Svg>
)

const svgOutput = render(jsx, opts)

const filePath = path.join(__dirname, 'example.svg')

fs.writeFile(filePath, svgOutput, 'utf8')
