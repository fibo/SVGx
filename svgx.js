var dom = require('cheerio')
var no = require('not-defined')

var doctype = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'

function svgx (render) {
  return function (jsx, opts) {
    // Default options.
    if (no(opts)) opts = {}
    if (no(opts.doctype)) opts.doctype = true
    if (no(opts.xmlns)) opts.xmlns = true

    var svg = render(jsx)

    var $ = dom.load(svg, { xmlMode: true })

    var $svg = $('svg')

    // Currently, React strips off namespace attributes.
    if (opts.xmlns) {
      $svg.attr('xmlns', 'http://www.w3.org/2000/svg')
      $svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    }

    if (opts.style) {
      $svg.prepend('<style>' + opts.style + '</style>')
    }

    var result = $.html()

    if (opts.doctype) result = doctype + result

    return result
  }
}

module.exports = exports.default = svgx
