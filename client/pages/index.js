import {Fragment, Component} from 'react'
// importing the Chat component
import Chat from '/components/Chat'
import Header from '/components/Header'
import Footer from '/components/Footer'
import PageWrapper from '@helper/components/PageWrapper'

export default class extends Component {
  render () {
    return (
      <Fragment>
        <PageWrapper>
          <Header />
          <Chat />
          <Footer />
        </PageWrapper>
      </Fragment>
    )
  }
}
