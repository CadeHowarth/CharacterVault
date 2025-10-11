export const REGISTER_MUTATION = `
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
                id,
                username,
                email
        }
    }
`