const express = require('express');
const router = express.Router();
const {getAllBooks, 
    addNewBook, 
    changeBookById, 
    deleteBookById} = require('../controllers/books.controller.js')

router.get('/', getAllBooks);
router.post('/', addNewBook);
router.put('/:id', changeBookById);
router.delete('/:id', deleteBookById);


module.exports = router;