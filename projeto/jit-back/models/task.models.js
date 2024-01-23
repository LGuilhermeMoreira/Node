var mongoose = require('mongoose')

var TaskSchema = mongoose.Schema({
    task: {type: String,require:true},
    date : {type:String,require:false},
    taskStatus : {type:Boolean,require:true}
})

var TaskModels = mongoose.model('task',TaskSchema)

module.exports = TaskModels