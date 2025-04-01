const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch (req.url) {
        case '/': {
            console.log('index.html')
            fs.readFile(path.join(__dirname, 'html', 'index.html'), (err, content) => {
                if (err)
                    console.error(err)
                res.end(content)
            })
            break
        }
        case '/about': {
            console.log('about.html')
            fs.readFile(path.join(__dirname, 'html', 'about.html'), (err, content) => {
                if (err)
                    console.error(err)
                res.end(content)
            })
            break
        }
        case '/contact': {
            console.log('contact-me.html')
            fs.readFile(path.join(__dirname, 'html', 'contact-me.html'), (err, content) => {
                if (err)
                    console.error(err)
                res.end(content)
            })
            break
        }
        case '/favicon.ico': { 
            console.log('favicon')
            res.end()
            break
        }
        default: {
            console.log('404 not found page')
            fs.readFile(path.join(__dirname, 'html', '404.html'), (err, content) => {
                if (err)
                    console.error(err)
                res.end(content)
            })
        }
    }
})

const PORT = 8080

server.listen(PORT, err => {
    if (err)
        console.error('Failed to start the server')
    else 
        console.log('Server is listening on port ' + PORT)
})