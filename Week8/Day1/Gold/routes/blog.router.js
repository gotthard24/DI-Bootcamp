const express = require('express')
const router = express.Router()
const {blogPosts} = require('../config/data.js')

router.get('/', (req, res) =>{
    res.status(200).json(blogPosts);
});
router.post('/', (req, res) =>{
    const {todo} = req.body;
    blogPosts.push({id: ++maxIndex, todo});
    res.status(200).json(blogPosts);
});

router.put('/:id', (req, res) =>{
    const {id} = req.params
    const {todo} = req.body
    const index = blogPosts.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    blogPosts[index] = {
        ...blogPosts[index],
        todo
    }

    res.status(200).json(blogPosts)
})

router.delete('/:id', (req,res) =>{
    const {id} = req.params
    const index = blogPosts.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    blogPosts.splice(index,1)

    res.status(200).json(blogPosts)
})

module.exports = router