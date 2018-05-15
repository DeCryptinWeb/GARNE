import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import {getMessagesState, addNewMessageToState} from './data.graphql'
import Message from './Message'

class Messages extends Component {
  constructor (props) {
    super(props)

    this.inputVal = React.createRef()
  }

  render () {
    const {data, data: {messagesState: {messages}}, addNewMessageToState} = this.props
    const lastFiveMessages = messages.slice(1).slice(-5)

    return (
      <div style={{'max-width': '524px', float: 'left'}}>
        <ul style={{
          width: '500px',
          'min-height': '200px',
          background: '#ededed',
          position: 'relative',
          float: 'left',
          padding: '12px',
          fontFamily: 'cursive'
        }}>
          {lastFiveMessages.map((msg, index) => {
            return <Message key={index} text={msg.text} type={msg.type} />
          })}
        </ul>
        <div style={{width: '100%'}}>
          <input ref={this.inputVal} type='text' placeholder='write something' style={{
            padding: '6px',
            'border-radius': '6px 0 0 6px',
            border: '1px solid #58aec7',
            width: 'calc(100% - 60px)'
          }} />
          <button onClick={() => {
            addNewMessageToState({variables: {
              text: this.inputVal.current.value,
              topic: 'Using Apollo',
              type: 'user'
            }}); this.inputVal.current.value = ''
          }} type='button' style={{
            padding: '7px',
            background: '#58aec7',
            color: '#fff',
            border: 'none'
          }}>Send</button>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(getMessagesState),
  graphql(addNewMessageToState, {name: 'addNewMessageToState'})
)(Messages)
