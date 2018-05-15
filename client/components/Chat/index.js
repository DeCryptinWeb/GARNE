import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import {getMessagesState, addNewMessageToState} from './data.graphql'
import Message from './Message'
import classes from './styles.css'

class Messages extends Component {
  constructor (props) {
    super(props)

    this.inputVal = React.createRef()
    this.addNewMessageToStates = this.addNewMessageToStates.bind(this)
  }

  addNewMessageToStates () {
    const {addNewMessageToState} = this.props

    addNewMessageToState({variables: {
      text: this.inputVal.current.value,
      topic: 'Using Apollo',
      type: 'user'
    }})

    this.inputVal.current.value = ''
  }

  render () {
    const {data: {messagesState: {messages}}} = this.props
    const lastFiveMessages = messages.slice(1).slice(-5)

    return (
      <div className={classes.container}>
        <ul className={classes.list}>
          {lastFiveMessages.map((msg, index) => {
            return <Message key={index} text={msg.text} type={msg.type} />
          })}
        </ul>
        <div>
          <input ref={this.inputVal} type='text' placeholder='write something' className={classes.input} />
          <button onClick={this.addNewMessageToStates} type='button' className={classes.button}>Send</button>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(getMessagesState),
  graphql(addNewMessageToState, {name: 'addNewMessageToState'})
)(Messages)
