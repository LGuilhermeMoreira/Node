

const url = require('url')
const parseURL = new url.URL('localhost:8000')
console.log(parseURL.host) // local host é vazio
console.log(parseURL.pathname)

// node service.js && node index.js