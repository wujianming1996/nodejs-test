const http = require('http');
const server = http.createServer((req, res) => {
    console.log('已经收到请求')
    console.log(req.url,req.method)
    res.setHeader('Content-Type','text/html')
    res.write('<meta charset="UTF-8">')
    res.write('<h1>hello 你好</h1>')
    res.end()
})

server.listen(
    80,'localhost',()=>{
    console.log('服务器已经在监听80端口')
})