import App, {Container} from 'next/app'
import GlobalCss from '@helper/components/GlobalCss'
import React from 'react'

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
        <Component {...pageProps} />
      </GlobalCss>
    </Container>
  }
}
