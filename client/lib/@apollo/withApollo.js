import {Component} from 'react'
import {ApolloProvider, getDataFromTree} from 'react-apollo'
import apolloclient from '@apollo/apolloClient'
import logger from '@helper/logger'

export default (App) => class extends Component {
  static async getInitialProps ({ Component, router, ctx }) {
    try {
      // getDataFromTree runs all GraphQL qeueries within the tree of <App>
      // before rendering the view so the data is already
      // present when the view gets rendered
      await getDataFromTree(
        <ApolloProvider client={apolloclient}>
          <App
            Component={Component}
            router={router}
          />
        </ApolloProvider>
      )
    } catch (error) {
      logger.error(error)
    }

    return {}
  }

  render () {
    return <ApolloProvider client={apolloclient}>
      <App apolloClient={apolloclient} {...this.props} />
    </ApolloProvider>
  }
}
