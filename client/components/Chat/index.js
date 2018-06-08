import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import Message from './Message'
import TextField from './TextField'
import {getMessagesState} from './data.graphql'
import classes from './styles.css'

class Messages extends Component {
  render () {
    const {data: {messagesState: {messages}}} = this.props
    const lastFiveMessages = messages.slice(0).slice(-6)

    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <ul className={classes.list}>
            {lastFiveMessages.map((msg, index) => {
              return <Message key={index} text={msg.text} type={msg.type} />
            })}
          </ul>
          <TextField saveText={this.addNewMessageToStates} />
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(getMessagesState)
)(Messages)
