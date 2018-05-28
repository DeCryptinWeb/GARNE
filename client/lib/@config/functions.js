const log = require('../@helper/logger')
const zindex = require('./zindex')

module.exports = {
  zindex: function (elementName, area) {
    area = area ? zindex[area] : zindex.default
    const itemIndex = area.indexOf(elementName)

    if (itemIndex !== -1) return (itemIndex + 1)

    log.error(['No z-index found for', '\x1b[33m', elementName])
  }
}
