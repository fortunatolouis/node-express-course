const http = require('http')
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
// referenced files
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    const url = req.url
    if (url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        // we have full control of the status codes we write to head but not control over what the browser tells us the code memes content type is a MIME type
        res.write(homePage)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    } else if (url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    } else if (url === '/browser-app.js') {
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>page note found</h1>')
        res.end()
    }
})
// the req and response is created each time the user "hits" the server we have access to these objects when the server is hit these objects are the inputs of the callback function that we passed to createServer

server.listen(5000)