const express = require('express');
const path = require('path');

const router = express.Router();
const pathTemplate = path.join(__dirname, '../template');

router.get('/add', (req, res) => {
    res.sendFile(`${pathTemplate}/userform.html`);
});

router.post('/save', (req, res) => {
    try {
        console.log(req.body);
        const name = req.body.name;
        const age = req.body.age;

        // Lógica para salvar os dados no banco de dados ou fazer outra operação necessária
        // Exemplo: database.saveUser({ name, age });

        res.status(200).json({ message: 'Dados salvos com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar dados.' });
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Estamos buscando o usuário ${id}`);

    // Lógica para buscar o usuário no banco de dados usando o ID
    // Exemplo: const user = database.getUserById(id);

    res.status(200).json({ user: id });
});

module.exports = router;
