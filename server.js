import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'

import { typeDefs, resolvers } from './src/app/graphql/modules/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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