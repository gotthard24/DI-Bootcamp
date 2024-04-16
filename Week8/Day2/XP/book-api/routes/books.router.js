const express = require('express');
const router = express.Router();
const {getAllBooks,
    getBookById,
    addBook,
    changeBookById,
    deleteBookById} = require('../controllers/books.controller.js')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', addBook)
router.put('/:id', changeBookById)
router.delete('/:id', deleteBookById)

module.exports = router