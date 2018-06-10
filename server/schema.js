import {makeExecutableSchema} from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'
import path from 'path'

const typesArray = fileLoader(path.join(__dirname, './components/**/*.graphql'), { recursive: true })
const resolversArray = fileLoader(path.join(__dirname, './components/**/*resolver.js'), { extensions: ['.js'] })

const typeDefs = mergeTypes(typesArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
