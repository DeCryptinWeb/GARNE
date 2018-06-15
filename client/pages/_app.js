import App, {Container} from 'next/app'
import GlobalCss from '@helper/components/GlobalCss'
import React from 'react'
import withApollo from '@apollo/withApollo.js'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps, apolloClient} = this.props
    return <Container>
      <GlobalCss>
        <ApolloProvider client={apolloClient} >
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalCss>
    </Container>
  }
}

export default withApollo(MyApp)
