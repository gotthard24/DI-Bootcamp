const {db} = require('../config/data.js')

const _getAllTasks = () =>{
    return db('tasks').select('id', 'title','description', 'status')
}

const _getTaskById = (id) =>{
    return db('tasks').select('id', 'title','description', 'status').where({id}).first()
}

const _addTask = (title, description) =>{
    return db('tasks').insert({title,description})
}

const _changeTaskById = (id, status) =>{
    return db('tasks').where({id}).first().update({status}, ['id', 'title','description', 'status'])
}

const _deleteTaskById = (id) =>{
    return db('tasks').where({id}).first().del(['id', 'title','description', 'status'])
}

module.exports = {
    _getAllTasks,
    _getTaskById,
    _addTask,
    _changeTaskById,
    _deleteTaskById,
}