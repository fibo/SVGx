#!/usr/bin/env babel-node

import React from 'react'
import path from 'path'
import { render } from 'svgx'
import write from 'write-file-utf8'

const svgOutput = render(
  <svg width={100} height={100}>
    <rect x={10} y={10} width={50} height={50} />
  </svg>
)

write(path.join(__dirname, 'example.svg'), svgOutput)
