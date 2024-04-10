// const {hash} = require('./hash.js')
import hash from "./hash.js";

let pass = 123456

let hashedPass = hash(pass)

console.log(hashedPass, 'hash');