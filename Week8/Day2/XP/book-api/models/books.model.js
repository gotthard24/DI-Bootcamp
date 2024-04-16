const {db} = require('../config/data.js')

const _getAllBooks = () =>{
    return db('books').select('id','title','author', 'publishedyear')
}

const _getBookById = (id) =>{
    return db('books').select('id','title','author', 'publishedyear').where({id})
}

const _addBook = (title, author, publishedyear) =>{
    return db('books').insert({title, content, author, publishedyear}, ['id','title','author', 'publishedyear'])
}

const _changeBookById = (id, title, author, publishedyear) =>{
    return db('books').where({id}).update({title, content, author, publishedyear}, ['id','title','author', 'publishedyear'])
}

const _deleteBookById = (id) =>{
    return db('books').del(['id','title','author', 'publishedyear']).where({id})
}

module.exports = {
    _getAllBooks,
    _getBookById,
    _addBook,
    _changeBookById,
    _deleteBookById,
}