const {db} = require('../config/data.js')

const _getAllUsers = () =>{
    return db('users').select('id','title','author', 'publishedyear')
}

const _getUserById = (id) =>{
    return db('users').select('id','title','author', 'publishedyear').where({id})
}

module.exports = {
    _getAllUsers,
    _getUserById,
}