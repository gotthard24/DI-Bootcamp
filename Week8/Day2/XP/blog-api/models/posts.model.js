const {db} = require('../config/data.js')

const _getAllPosts = () =>{
    return db('posts').select('id','title','content')
}

const _getPostById = (id) =>{
    return db('posts').select('id','title','content').where({id})
}

const _addPost = (title, content) =>{
    return db('posts').insert({title, content}, ['id','title','content'])
}

const _changePostById = (id, title, content) =>{
    return db('posts').where({id}).update({title, content}, ['id','title','content'])
}

const _deletePostById = (id) =>{
    return db('posts').del(['id','title','content']).where({id})
}

module.exports = {
    _getAllPosts,
    _getPostById,
    _addPost,
    _changePostById,
    _deletePostById,
}