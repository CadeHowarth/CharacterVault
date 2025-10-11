export const REGISTER_MUTATION = `
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                id
                username
                email
            }
        }
    }
`