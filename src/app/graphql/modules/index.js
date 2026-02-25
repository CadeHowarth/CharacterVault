import { typeDefs as userTypeDefs } from '../users/user.schema.js'
import { resolvers as userResolvers } from '../users/user.resolvers.js'

const typeDefs = [
    userTypeDefs
]

const resolvers = [
    userResolvers
]

export { typeDefs, resolvers }