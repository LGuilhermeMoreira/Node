// codigo sincrono
console.log('codigo sincrono')
console.log('inicio')
console.log('durante')
console.log('fim')

// codigo assincronas
async function return_1_async(){
    setTimeout(() => {
        console.log('fim do cod_async')
    },1000)
}

console.log()

console.log('codigo assincrono')
console.log('incio')
return_1_async()
console.log('fim')