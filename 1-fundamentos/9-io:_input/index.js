const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('qual sua linguagem de progamação favorita?\nResposta:',(language) => {
    console.log(`linguagem favorita: ${language}`)
    readline.close()
})

