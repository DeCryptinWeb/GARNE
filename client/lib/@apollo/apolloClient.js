// ** Bugfix for Fetch Isssue *********
import fetch from 'isomorphic-fetch'
// ************************************
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'

// importing default States
import messagesState from './states/messages.js'
// importing resolvers
import messageResolvers from './resolvers/messages.js'

// initializing the Apollo-cache to use it as local store
const cache = new InMemoryCache()

// defining default states
const defaultState = messagesState

// creating a state link
const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: messageResolvers
})

// creating a terminating link with specific endpoint
const terminatingLink = new HttpLink({
  uri: 'https://launchpad.graphql.com/w5xlvm3vzz'
})

// chaining links together
// * to learn more about the concept of links visit https://www.apollographql.com/docs/link/overview.html
// * to learn mor about link composition visit https://www.apollographql.com/docs/link/composition.html
// * to learn how to create custom links visit https://dev-blog.apollodata.com/creating-a-data-component-with-apollo-link-f0719d8193ee
const links = ApolloLink.from([stateLink, terminatingLink])

// creating the config object
const config = {
  link: links,
  cache
}

const client = new ApolloClient(config)

export default client
