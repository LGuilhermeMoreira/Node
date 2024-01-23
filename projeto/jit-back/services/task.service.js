const TaskModels = require('../models/task.models')

class TaskService{
    static async list(req,res){
        try {
            const tasks = await TaskModels.find();
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Erro ao listar tarefas:', error);
            res.status(500).send('Erro ao listar tarefas.');
        }
    }

    static async register(req,res){
        try {
            const task = await TaskModels.create(req.body);
            res.status(201).json(task);
        } catch (error) {
            console.error('Erro ao registrar tarefa:', error);
            res.status(500).send('Erro ao registrar tarefa.');
        }
    }

    static async retrive(req,res){
        try {
            const task = await TaskModels.findById(req.params.id);
            res.status(200).json(task);
        } catch (error) {
            console.error('Erro ao recuperar tarefa:', error);
            res.status(500).send('Erro ao recuperar tarefa.');
        }
    }

    static async update(req,res){
        try {
            const task = await TaskModels.findByIdAndUpdate(req.params.id, req.body, {"new":true});
            res.status(200).json(task);
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            res.status(500).send('Erro ao atualizar tarefa.');
        }
    }

    static async conclude(req, res) {
        try {
            const task = await TaskModels.findByIdAndUpdate(req.params.id, { taskStatus: true }, { new: true });
            res.status(200).json(task);
        } catch (error) {
            console.error('Erro ao concluir tarefa:', error);
            res.status(500).send('Erro ao concluir tarefa.');
        }
    }
    

    static async delete(req,res){
        try {
            const task = await TaskModels.findByIdAndDelete(req.params.id);
            res.status(200).json(task);
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            res.status(500).send('Erro ao deletar tarefa.');
        }
    }
}

module.exports = TaskService
