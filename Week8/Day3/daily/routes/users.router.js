const express = require('express');
const router = express.Router();
const {getAllUsers,
    getUserById,
    register,
    login,
    changeUserById} = require('../controllers/users.controller.js')

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/register', register)
router.post('/login', login)
router.put('/users/:id', changeUserById)

module.exports = router