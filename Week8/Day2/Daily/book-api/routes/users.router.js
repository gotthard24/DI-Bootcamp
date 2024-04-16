const express = require('express');
const router = express.Router();
const {getAllUsers,
    getUserById} = require('../controllers/users.controller.js')

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/register', )
router.post('/login', )
router.put('users/:id', )

module.exports = router