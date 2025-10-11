const userTypeDefs = require('../users/user.schema.js')
const userResolvers = require('../users/user.resolvers.js')

const typeDefs = [
    userTypeDefs
]

const resolvers = {
    ...userResolvers
}

module.exports = { typeDefs, resolvers }