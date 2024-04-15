const {books} = require('../config/books.js')

let maxIndex = books.length;

const getAllBooks = (req, res) =>{
    res.status(200).json(books);
};

const addNewBook = (req, res) =>{
    const {title, author, genre} = req.body;
    books.push({id: ++maxIndex, title, author, genre});
    res.status(200).json(books);
};

const changeBookById = (req, res) =>{
    const {id} = req.params
    const {title, author, genre} = req.body
    const index = books.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    books[index] = {
        ...books[index],
        title,
        author,
        genre
    }

    res.status(200).json(books)
};

const deleteBookById = (req,res) =>{
    const {id} = req.params
    const index = books.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    books.splice(index,1)

    res.status(200).json(books)
};

module.exports = {
    getAllBooks,
    addNewBook,
    changeBookById,
    deleteBookById,
}