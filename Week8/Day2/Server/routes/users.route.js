const express = require("express")
const router = express.Router();
const {getAllUsers,getUserById} = require("../controllers/users.controller.js")
const {auth} = require('../middlewares/utils.js')

router.get('', auth, getAllUsers)
router.get('/:id', getUserById)

module.exports = router