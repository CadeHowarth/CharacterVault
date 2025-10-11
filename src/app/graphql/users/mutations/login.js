export const LOGIN_MUTATION = `
    mutation loginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            token
            user {
                id
                username
            }
        }
    }
`