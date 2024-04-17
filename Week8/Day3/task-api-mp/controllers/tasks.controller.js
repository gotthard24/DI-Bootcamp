const {_getAllTasks,
    _getTaskById,
    _changeTaskById,
    _addTask,
    _deleteTaskById
    } = require('../models/tasks.model.js')

const getAllTasks = (req, res) =>{
    _getAllTasks()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const getTaskById = (req, res) =>{
    const {id} = req.params
    _getTaskById(id)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({ msg: 'Task not found' });
            }
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const addTask = (req, res) =>{
    const {title, description} = req.body
    _addTask(title, description)
        .then(data => {
            getAllTasks(req, res);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const changeTaskById = (req, res) =>{
    const {id} = req.params
    const {status} = req.body
    _changeTaskById(id, status)
        .then(data => {
            if (data) {
                getTaskById(req, res);
            } else {
                res.status(404).json({ msg: 'Task not found' });
            }    
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const deleteTaskById = (req,res) =>{
    const {id} = req.params
    _deleteTaskById(id)
        .then(data => {
            if (data) {
                res.status(200).json({msg: 'Task deleted'})
            } else {
                res.status(404).json({ msg: 'Task not found' });
            }         
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

module.exports = {
    getAllTasks,
    getTaskById,
    changeTaskById,
    addTask,
    deleteTaskById,
}