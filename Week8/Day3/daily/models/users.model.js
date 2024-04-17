const {db} = require('../config/data.js')
const {hashPassword, compare} = require('../hashtest.js')

const _getAllUsers = () =>{
    return db('users').select('id', 'email','username', 'first_name', 'last_name')
}

const _getUserById = (id) =>{
    return db('users').select('id', 'email','username', 'first_name', 'last_name').where({id}).first()
}

const _changeUserById = async (id, email, first_name, last_name) =>{
    return db('users').where({id}).first().update({email, first_name, last_name}, ['id', 'email','username', 'first_name', 'last_name'])
}

const _register = async(email, username, first_name, last_name, password) =>{
    try {
        const hashed =  await hashPassword(password)
        const trx = await db.transaction();
        
        const newUser = await db('users')
        .insert({email, username, first_name, last_name})
        .transacting(trx);


        const newPass = await db('hashpwd')
        .insert({username, password: hashed})
        .transacting(trx);

        await trx.commit()
        return db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({ username }).first();
    } catch (error) {
        console.log(error);
        await trx.rollback()
    }
}

const _login = async (username, password) => {
    try {
        console.log('1');
        const hashedResult = await db('hashpwd').select('password').where({ username });
        const hashedPassword = hashedResult[0]?.password;
        if (!hashedPassword) {
            console.log('2');
            return null; // Username not found
        }
        const result = await compare(password, hashedPassword);
        if (result) {
            console.log('3');
            return db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({ username }).first();
        } else {
            return null; // Incorrect password
        }
    } catch (error) {
        throw new Error('Error fetching hashed password:', error);
    }
}

module.exports = {
    _getAllUsers,
    _getUserById,
    _changeUserById,
    _register,
    _login,
}