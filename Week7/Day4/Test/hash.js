// const bcrypt = require('bcrypt') commonjs
import bcrypt from "bcrypt"

export const hash = (pass) => {
    const saltRounds = 8
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(pass + '', salt)
    return hash
}

export default hash

// module.exports = {hash} commonjs