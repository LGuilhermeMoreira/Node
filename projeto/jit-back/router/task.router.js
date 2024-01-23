const taskService = require('../services/task.service')

var express = require('express')
var router = express.Router()

router.get('/', (req,res,next)=>{
    res.write("ola mundo")
})

router.get('/listar', (req,res,next)=>{
    taskService.list(req,res)  
})

router.post('/cadastrar',(req,res,next) => {
    taskService.register(req,res)
})

router.get('/recuperar/:id', (req,res,next) => {
    taskService.retrive(req,res)
})

router.put('/atualizar/:id', (req,res,next) => {
    taskService.update(req,res)
})

router.delete('/deletar/:id', (req,res,next) => {
    taskService.delete(req,res)
})

router.put('/concluir/:id', (req,res,next)=>{
    taskService.conclude(req,res)
})

module.exports = router;