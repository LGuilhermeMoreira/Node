const express = require('express');
const path = require('path');
const userRouters = require('./router/router');

const app = express();
const port = 8000;
const pathTemplate = path.join(__dirname, 'template');

// Middleware para autenticação (exemplo)
const checkAuth = function (req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("Está logado");
        next();
    } else {
        console.log('Não está logado');
        next();
    }
};

// Middleware para ler o corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para acessar o css
app.use(express.static('public'))

// Middleware de autenticação (ativado para todas as rotas)
// app.use(checkAuth);

//
app.use((req,res,next)=>{
    res.sendFile(`${pathTemplate}/index.html`);
})

// Rotas modulares
app.use('/users', userRouters);

// Rota principal
app.get('/', (req, res) => {
    // Aqui, você pode usar um sistema de templates como EJS
    res.sendFile(`${pathTemplate}/index.html`);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta %d', port);
});
