import dom from 'cheerio'
import reactDom from 'react-dom/server'

const render = (jsx) => {
  let result = reactDom.renderToStaticMarkup(jsx)

  let $ = dom.load(result, { xmlMode: true })

  $('svg').attr('xmlns', 'http://www.w3.org/svg/2000')
  $('svg').attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')

  return $.html()
}

export { render }
