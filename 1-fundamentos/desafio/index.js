
const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
    name : 'idade',
    message: "qual a idade? "
},{
    name: "nome",
    message: "qual o nome? "
}]).then((response) => {
   try{
    console.log(chalk.bgYellow.black(`Seu nome é ${response["nome"]} e sua idade é ${response["idade"]}`))
   }catch(err){
    console.log(err)
   }
}).catch(
    err => {
        console.log(err)
    }
)