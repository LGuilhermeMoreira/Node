const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 8000

const server =  http.createServer((req,res) => {
    const UrlInfo = url.parse(req.url,true)
    const name = UrlInfo.query.name
    
    if(!name) {
        fs.readFile('./message.html',(err,data) => {
            res.writeHead(200, {'Contety-type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
    else{
        fs.writeFile('file.txt',name, (err,data) => {
            res.writeHead(302,{
                location: '/'
            })
            return res.end()
        })
    }
    
})

server.listen(port,() => {
    
})