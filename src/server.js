    const connect = require('connect')
    const serveStatic = require('serve-static')
    const path = require('path')

    const app = connect()

    const staticFilesPath = path.join(__dirname, 'src/')

    app.use(serveStatic(staticFilesPath))

    const port = 8080; // You can choose any available port
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })