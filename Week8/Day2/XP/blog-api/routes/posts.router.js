const express = require('express');
const router = express.Router();
const {getAllPosts,
    getPostById,
    addPost,
    changePostById,
    deletePostById} = require('../controllers/posts.controller.js')

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', addPost)
router.put('/:id', changePostById)
router.delete('/:id', deletePostById)

module.exports = router