const express = require('express');
const router = express.Router();
const {getAllTasks,
    getTaskById,
    changeTaskById,
    addTask,
    deleteTaskById} = require('../controllers/tasks.controller.js')

router.get('/', getAllTasks)
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id', changeTaskById)
router.delete('/:id', deleteTaskById)

module.exports = router