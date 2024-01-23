const http = require('http')
const fs = require('fs')

const port = 8000

const server =  http.createServer((req,res) => {
    fs.readFile('./message.html',(err,data) => {
        res.writeHead(200, {'Contety-type':'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(port,() => {
    
})