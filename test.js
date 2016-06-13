import dom from 'cheerio'
import React from 'react'
import render from 'svgx'
import test from 'tape'

test('svgx.render(jsx)', (t) => {
  const height = 100
  const width = 100

  const el = <svg width={width} height={height} />

  const $ = dom.load(render(el), { xmlMode: true })

  t.equal($('svg').attr('width'), width.toString(), 'width prop')
  t.equal($('svg').attr('height'), height.toString(), 'height prop')

  t.end()
})
