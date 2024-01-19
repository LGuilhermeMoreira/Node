const inquirer = require('inquirer')

inquirer.prompt([{
    name : 'p1',
    message: "qual a primeira nota? "
},{
    name: "p2",
    message: "qual a segunda nota? "
}]).then((response) => {
    console.log(response)
}).catch(
    err => {
        console.log(err)
    }
)

// npm install inquirer@6.3.1
