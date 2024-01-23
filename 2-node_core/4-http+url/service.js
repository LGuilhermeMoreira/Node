
const http = require('http')

const port = 8000

const server = http.createServer((req, res) => {
    
    // definindo o status code do endpoint
    res.statusCode = 200

    // alterando o header da aplicação
    res.setHeader('Contenty-type','text/html')

    // definindo o "retorno"
    res.end('<h1>Eu acho Go melhor que Node</h1>')

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})