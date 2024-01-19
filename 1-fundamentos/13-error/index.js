const x = "12"

if(Number.isInteger(x)){
    throw new Error("o valor de x não é int")
}

console.log('continuando o script\n')

console.log('try e catch')

try{
    x = "12"
}catch(err){
    console.error(err)
}