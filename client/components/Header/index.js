import {Component} from 'react'
import Svg from '@helper/components/Svg'
import classes from './styles.css'

export default class extends Component {
  render () {
    return (
      <header className={classes.header}>
        <Svg name='message' className={classes.icon} />
      </header>
    )
  }
}
