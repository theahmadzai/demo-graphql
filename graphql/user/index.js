const path = require("path")
const { loadSchemaSync } = require("@graphql-tools/load")
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { mergeTypeDefs } = require("@graphql-tools/merge")
const resolvers = require("./resolvers")

const typeDefs = loadSchemaSync(path.join(__dirname, "schema.gql"), {
  loaders: [new GraphQLFileLoader()],
})

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
})
