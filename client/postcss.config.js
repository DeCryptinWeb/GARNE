const variables = require('./lib/@config/variables')
const vars = require('postcss-simple-vars')

module.exports = {
  plugins: [
    vars({variables: variables})
  ]
}
