// importing the Chat component
import Chat from '../components/Chat'
// importing withApollo HOC to wrap it around the Index-Component and provide the needed abilities
import withApollo from '../lib/@apollo/withApollo.js'

const Index = () => {
  return <Chat />
}

export default withApollo(Index)
