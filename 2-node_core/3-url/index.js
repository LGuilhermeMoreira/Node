const url = require('url')

const parseURL = new url.URL('https://www.meusite.com.br/catalog?produtos=cadeira')

console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.searchParams)
