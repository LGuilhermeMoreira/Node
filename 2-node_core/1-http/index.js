
const http = require('http')

const port = 8000

const server = http.createServer((req, res) => {
    
   res.write("oi http")

   res.end()

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
