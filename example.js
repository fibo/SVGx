#!/usr/bin/env babel-node

import React from 'react'
import fs from 'fs'
import path from 'path'
import { render } from 'svgx'

const svgOutput = render(
  <svg width={100} height={100} >
    <rect x={10} y={10} width={50} height={50} />
  </svg>
)

const filePath = path.join(__dirname, 'example.svg')

fs.writeFile(filePath, svgOutput, 'utf8')
