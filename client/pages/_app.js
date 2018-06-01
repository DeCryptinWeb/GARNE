import App, {Container} from 'next/app'
import GlobalCss from '@helper/components/GlobalCss'
import React from 'react'
// importing withApollo HOC to wrap it around the Index-Component and provide the needed abilities
import apolloClient from '@apollo/apolloClient.js'
import { ApolloProvider } from 'react-apollo'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <GlobalCss>
        <ApolloProvider client={apolloClient} >
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalCss>
    </Container>
  }
}
