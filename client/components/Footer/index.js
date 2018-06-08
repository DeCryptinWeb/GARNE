import {Component} from 'react'
import classes from './styles.css'

export default class extends Component {
  render () {
    return (
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          GA<span className={classes.reflect}>R</span><span className={classes.reflect}>N</span>E - <a href='https://github.com/DeCryptinWeb/GARNE' target='blank' >https://github.com/DeCryptinWeb/GARNE</a></div>
      </footer>
    )
  }
}
