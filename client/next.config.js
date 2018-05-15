// using next-plugin-graphql for outsourcing queries/mutations into separate files
const withGraphql = require('next-plugin-graphql')
const withCSS = require('@zeit/next-css')

module.exports = withGraphql(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  }
}))
