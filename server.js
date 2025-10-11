const express = require('express')
const path = require('path')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@as-integrations/express5')
const cors = require('cors')
const bodyParser = require('body-parser')

const { typeDefs, resolvers } = require('./src/app/graphql/modules/index.js')

async function startApolloServer() {
    const app = express()

    const webAppPort = 8000

    app.use(express.static(path.join(__dirname, 'src')))

    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
    })

    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start()

    app.use('/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
    )

    app.listen(webAppPort, () => {
        console.log(`GraphQL server running at http://localhost:${webAppPort}/graphql`)
        console.log(`Server running on http://localhost:${webAppPort}`)
    })
}

startApolloServer()