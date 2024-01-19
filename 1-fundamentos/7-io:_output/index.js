const x = 10

const y = "meu amor"

const z = {"amor":"raissa"}

// resumidamente um print
console.log(x,y,z)

// contagem de impressões
console.count(`O valor de x é: ${x}\tcontagem: `)
console.count(`O valor de x é: ${x}\tcontagem: `)
console.count(`O valor de x é: ${x}\tcontagem: `)
console.count(`O valor de x é: ${x}\tcontagem: `)

//variavel entre strings
console.log('Nome da minha princesa: %s',z["amor"])

console.log("limpando o terminal me 2 segundos")

//limpar o terminal
setTimeout( () => {
    console.clear()
},2000)