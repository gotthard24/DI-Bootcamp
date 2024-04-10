const objArray = require('./products.js')

function showProduct(name) {
   return objArray.find(obj => obj.name === name)
}

console.log(showProduct('Name1'));
console.log(showProduct('Name'));