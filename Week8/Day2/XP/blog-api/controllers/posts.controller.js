const {_getAllPosts,
    _getPostById,
    _addPost,
    _changePostById,
    _deletePostById,} = require('../models/posts.model.js')

const getAllPosts = (req, res) =>{
    _getAllPosts()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const getPostById = (req, res) =>{
    const {id} = req.params
    _getPostById(id)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const addPost = (req, res) =>{
    const {title, content} = req.body
    _addPost(title, content)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const changePostById = (req, res) =>{
    const {id} = req.params
    const {title, content} = req.body
    _changePostById(id,title,content)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const deletePostById = (req, res) =>{
    const {id} = req.params
    _deletePostById(id)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

module.exports = {
    getAllPosts,
    getPostById,
    addPost,
    changePostById,
    deletePostById,
}