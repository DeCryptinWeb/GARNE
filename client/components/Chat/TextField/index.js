import React, {Component} from 'react'
import classes from './styles.css'
import {compose, graphql} from 'react-apollo'
import {addNewMessageToState} from './data.graphql'

class TextField extends Component {
  constructor (props) {
    super(props)
    this.inputVal = React.createRef()
    this.addNewMessageToState = this.addNewMessageToState.bind(this)
  }

  addNewMessageToState () {
    const {addNewMessageToState} = this.props
    addNewMessageToState({variables: {
      text: this.inputVal.current.value,
      topic: 'Using Apollo',
      type: 'user'
    }})

    this.inputVal.current.value = ''
  }

  render () {
    return (
      <div className={classes.inputContainer}>
        <input
          ref={this.inputVal}
          type='text'
          placeholder='write something'
          className={classes.input}
          onKeyUp={evt => evt.keyCode === 13 && this.addNewMessageToState()} />
        <button onClick={this.addNewMessageToState} type='button' className={classes.button}>Send</button>
      </div>
    )
  }
}

export default compose(
  graphql(addNewMessageToState, {name: 'addNewMessageToState'})
)(TextField)
