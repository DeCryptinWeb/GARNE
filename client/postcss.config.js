const config_variables = require('./lib/@config/variables')
const config_mixins = require('./lib/@config/mixins')
const config_functions = require('./lib/@config/functions')
const vars = require('postcss-simple-vars')
const mixins = require('postcss-mixins')
const functions = require('postcss-functions')
const nested = require('postcss-nested')

module.exports = {
  plugins: [
    vars({variables: config_variables}),
    mixins({mixins: config_mixins}),
    functions({functions: config_functions}),
    nested()
  ]
}
