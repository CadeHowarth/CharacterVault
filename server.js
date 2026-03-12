import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'
import { renderToStringAsync } from "preact-render-to-string"
import { h } from 'preact'
import htm from 'htm'
import { Layout } from './src/app/components/global/modules/layout/page-layout.js'
import { Homepage } from './src/app/components/home/page-home.js'
// import { Browse } from './src/app/components/browse/page-browse-vtmv5.js'
import { Create } from './src/app/components/create/page-create-vtmv5.js'
// import { Profile } from './src/app/components/nav/page-profile.js'

import { typeDefs, resolvers } from './src/app/graphql/modules/index.js'

const html = htm.bind(h)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function renderPage(res, title, PageComponent, { scripts = [], styles = [] } = {}) {
    try {
        const vnode = html`<${Layout} title=${title} scripts=${scripts} styles=${styles}>
            <${PageComponent} />
        <//>`
        const body = await renderToStringAsync(vnode)
        res.send(`<!DOCTYPE html>${body}`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}

async function startApolloServer() {
    const app = express()

    const webAppPort = 8000

    app.use(express.static(path.join(__dirname, 'src')))

    app.get('/', (req, res) => renderPage(res, 'Character Vault', Homepage))
    // app.get('/browse', (req, res) => renderPage(res, 'Browse | CV', Browse))
    app.get('/create', (req, res) => renderPage(res, 'Create | CV', Create, {
        styles: [
            '/app/components/create/page-create-vtmv5-components.css',
        ],
        scripts: [
            { src: '/app/js/pages/create/vtmv5/page-create-vtmv5-logic.js', type: 'module', defer: true },
            { src: '/app/js/pages/create/vtmv5/trackerModule.js', type: 'module', defer: true},
            { src: '/app/js/pages/create/vtmv5/dataValidation.js', type: 'module', defer: true},
            { src: '/app/js/pages/create/vtmv5/helpers.js', type: 'module', defer: true},
        ],
    }))
    // app.get('/profile', (req, res) => renderPage(res, 'Profile | CV', Profile))

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