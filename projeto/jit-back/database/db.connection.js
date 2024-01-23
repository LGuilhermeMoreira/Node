var mongoose = require('mongoose')

var DB_URI = 'mongodb+srv://guilhermemoreira:JITTECHNOLOGY@task.ohstrlr.mongodb.net/?retryWrites=true&w=majority'
try{
    // Corrigir o nome da opção useNewUrlParser
    mongoose.connect(DB_URI,{useNewUrlParser:true})
}
catch (error){
    // Retornar ou lançar o erro capturado
    return console.error(error)
    // ou
    // throw error
}
finally{
    var db = mongoose.connection
    db.on('connected',() => console.log("MongoDb conectado com sucesso"))
    db.on('disconnected',() => console.log('MongoDB desconectado com sucesso'))
    // Usar console.error ou console.dir para registrar os erros
    db.on('error',(error) => console.error('MongoDB error: '+error))
    // ou
    // db.on('error',(error) => console.dir(error))
}
