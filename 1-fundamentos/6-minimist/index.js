const minimist = require('minimist')
const convC2K = require('./conv.js').convCToK

const args = minimist(process.argv.slice(2))

var valor = args['value']

console.log(
    `valor em Celcius: ${valor}\nconvertido para kelvin: ${convC2K(valor)} `
)

//node index.js --value=10
