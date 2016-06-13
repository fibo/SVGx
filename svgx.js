import dom from 'cheerio'
import reactDom from 'react-dom/server'

const doctype = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`
const render = (jsx, opts = {}) => {
  let svgx = reactDom.renderToStaticMarkup(jsx)

  let $ = dom.load(svgx, { xmlMode: true })

  let $svg = $('svg')

  // Currently, React strips off namespace attributes.
  if (opts.xmlns) {
    $svg.attr('xmlns', 'http://www.w3.org/2000/svg')
    $svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
  }

  let result = $.html()

  if (opts.doctype) result = doctype + result

  return result
}

export default render
