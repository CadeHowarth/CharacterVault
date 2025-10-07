const { gql } = require('graphql-tag')

const typeDefs = gql`
    type User {
        id: ID
        username: String!
        email: String!
        password_hash: String
        created_at: String
        updated_at: String
        is_active: Boolean
        last_login: String
    }

    type Query {
        user(id: ID!): User
        users: [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        updateUser(username: String, email: String): User
        deleteUser(id: ID!): User
        loginUser(username: String!, password: String!): AuthPayload
    }

    type AuthPayload {
        token: String!
        user: User!
    }
`

module.exports = typeDefs