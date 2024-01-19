// para utilizar isso assim
// tem que dar um npm install chalk@4.1.2
const chalk = require('chalk')

const nota = 9
if (nota >= 9){
    
console.log(chalk.green("aprovado"))

}else{
    
console.log(chalk.red("vermelho"))

}
console.log(chalk.bgWhite.black("isso é bizarro"))
