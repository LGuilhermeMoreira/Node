const TaskModels = require('../models/task.models')


class TaskService{
    static list(req,res){
        TaskModels.find().then(
            (tasks) => {
                res.status(201).json(tasks)
            }
        )
    }

    static register(req,res){
        TaskModels.create(req.body).then(
            (task) => {
                res.status(201).json(task)
            }
        )
    }

    static retrive(req,res){
        TaskModels.findById(req.params.id).then(
            (task) => {
                res.status(201).json(task)
            }
        )
    }

    static update(req,res){
        TaskModels.findByIdAndUpdate(
            req.params.id,
            req.body,
            {"new":true}
        ).then(
            (task) => {
                res.status(201).json(task)
            }
        )
    }

    static delete(req,res){
        TaskModels.findByIdAndDelete(req.params.id).then(
            (task) => {
                res.status(201).json(task)
            }
        )
    }
}

module.exports = TaskService