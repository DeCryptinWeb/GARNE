import {Component} from 'react'
import {getDataFromTree} from 'react-apollo'
import apolloclient from '@apollo/apolloClient'
import logger from '@helper/logger'

export default (App) => class extends Component {
  static async getInitialProps ({ Component, router, ctx }) {
    try {
      // getDataFromTree runs all GraphQL qeueries within the tree of <App>
      // before rendering the view so the data is already
      // present when the view gets rendered
      await getDataFromTree(
        <App
          Component={Component}
          apolloClient={apolloclient}
        />
      )
    } catch (error) {
      logger.error(error)
    }

    return {}
  }

  render () {
    return <App apolloClient={apolloclient} {...this.props} />
  }
}
