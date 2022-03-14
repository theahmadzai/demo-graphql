const { ApolloServer, gql } = require("apollo-server")
const { mergeSchemas } = require("@graphql-tools/schema")
const userSchema = require("./graphql/user")
const storeSchema = require("./graphql/store")

const server = new ApolloServer({
  schema: mergeSchemas({ schemas: [userSchema, storeSchema] }),
  introspection: true,
})

console.log(server.graphqlPath)

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
