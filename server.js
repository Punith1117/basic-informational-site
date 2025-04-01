const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end()
})

const PORT = 8080

server.listen(PORT, err => {
    if (err)
        console.error('Failed to start the server')
    else 
        console.log('Server is listening on port ' + PORT)
})