import gql from 'graphql-tag'

export default {
  Mutation: {
    addNewMessageToState: (_, {type, text, topic}, {cache}) => {
      const query = gql`
          query getMessages {
              messagesState @client {
                  messages {
                      id
                      text
                      type
                      topic
                  }
              }
          }
      `

      const prevState = cache.readQuery({query})

      const newState = {
        ...prevState,
        messagesState: {
          ...prevState.messagesState,
          messages: [
            ...prevState.messagesState.messages,
            {
              id: prevState.messagesState.messages.length + 1,
              text,
              type,
              topic,
              __typename: 'message'
            }
          ]
        }
      }

      cache.writeData({query, data: newState})
    }
  }
}
