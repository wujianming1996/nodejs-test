
const http = require('http');
const fs = require('fs')
const dayjs = require('dayjs')

console.log(dayjs().date())
const server = http.createServer((req, res) => {
    console.log('已经收到请求')
    let path = './page/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;

        case '/aboutme':
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end

        default:
            path += '404.html'
            res.statusCode = 404
            break;

    }

    res.setHeader('Content-Type','text/html')
    fs.readFile(path, (error, data) => {
        if (error)
            console.log(error)
        else
            res.write(data)
        res.end()
    })

})
server.listen(
    80, 'localhost', () => {
        console.log('服务器已经在监听80端口')
    })