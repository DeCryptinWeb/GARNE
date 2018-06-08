const config_variables = require('./lib/@config/variables')
const config_mixins = require('./lib/@config/mixins')
const config_functions = require('./lib/@config/functions')
const vars = require('postcss-simple-vars')
const mixins = require('postcss-mixins')
const functions = require('postcss-functions')
const nested = require('postcss-nested')
const cssNext = require('postcss-cssnext')

module.exports = {
  plugins: [
    vars({variables: config_variables}),
    mixins({mixins: config_mixins}),
    functions({functions: config_functions}),
    nested(),
    cssNext({
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 10']
    })
  ]
}
