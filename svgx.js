var dom = require('cheerio')

var doctype = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

function svgx (render) {
  return function (jsx, opts) {
    if (!opts) opts = {}

    var svg = render(jsx)

    var $ = dom.load(svg, { xmlMode: true })

    var $svg = $('svg')

    // Currently, React strips off namespace attributes.
    if (opts.xmlns) {
      $svg.attr('xmlns', 'http://www.w3.org/2000/svg')
      $svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    }

    if (opts.responsive) {
      $svg.prepend('<style>svg { width: 100%; height: auto }</style>')
    }

    var result = $.html()

    if (opts.doctype) result = doctype + result

    return result
  }
}

module.exports = exports.default = svgx
