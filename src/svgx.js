import dom from 'cheerio'
import reactDom from 'react-dom/server'

const render = (jsx) => {
  let result = reactDom.renderToStaticMarkup(jsx)

  let $ = dom.load(result, { xmlMode: true })

  $('svg').attr('xlmns', 'http://www.w3.org/svg/2000')

  return $.html()
}

export { render }
