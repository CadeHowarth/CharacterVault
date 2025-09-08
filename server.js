    const express = require('express')
    const path = require('path')

    const app = express()

    app.use(express.static(path.join(__dirname, 'src')))

    // Handle requests for the root path and send index.html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'src', 'index.html'))
    })

    const port = 8080
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })