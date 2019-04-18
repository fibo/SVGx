function svgx (render) {
  return function (jsx, opts) {
    // Default options.
    if (typeof opts === 'undefined') {
      opts = {
        doctype: [
          '<?xml version="1.0" encoding="UTF-8" standalone="no"?>',
          '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
          ''
        ].join('\n')
      }
    }

    return opts.doctype + render(jsx)
  }
}

module.exports = exports.default = svgx
