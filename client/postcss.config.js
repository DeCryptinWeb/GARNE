const config_variables = require('./lib/@config/variables')
const config_mixins = require('./lib/@config/mixins')
const vars = require('postcss-simple-vars')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')

module.exports = {
  plugins: [
    vars({variables: config_variables}),
    mixins({mixins: config_mixins}),
    nested()
  ]
}
