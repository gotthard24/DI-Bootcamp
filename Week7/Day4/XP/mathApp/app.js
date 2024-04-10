const {sum, multiply} = require('./math.js')
const lodash = require('lodash')

console.log(sum(5,5));
console.log(multiply(5,5));
console.log(lodash.sum([5,5]));
console.log(lodash.multiply(5,5));