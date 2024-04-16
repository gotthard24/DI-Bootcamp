const {_getAllBooks,
    _getBookById,
    _addBook,
    _changeBookById,
    _deleteBookById,} = require('../models/books.model.js')

const getAllBooks = (req, res) =>{
    _getAllBooks()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const getBookById = (req, res) =>{
    const {id} = req.params
    _getBookById(id)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const addBook = (req, res) =>{
    const {title, author, publishedYear} = req.body
    _addBook(title, author, publishedYear)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const changeBookById = (req, res) =>{
    const {id} = req.params
    const {title, author, publishedYear} = req.body
    _changeBookById(id,title,author, publishedYear)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const deleteBookById = (req, res) =>{
    const {id} = req.params
    _deleteBookById(id)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    changeBookById,
    deleteBookById,
}