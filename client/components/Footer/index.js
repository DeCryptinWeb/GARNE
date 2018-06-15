import {Component} from 'react'
import {Query} from 'react-apollo'
import classes from './styles.css'
import {GetFooterData} from './data.graphql'

export default class extends Component {
  render () {
    return (
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          GA<span className={classes.reflect}>R</span><span className={classes.reflect}>N</span>E -&nbsp;
          <Query query={GetFooterData} ssr>
            {({loading, error, data}) => {
              const {footerData: {footerLinkName, footerLinkUrl}} = data

              return <a href={footerLinkUrl} target='blank'>{footerLinkName}</a>
            }}
          </Query>
        </div>
      </footer>
    )
  }
}
