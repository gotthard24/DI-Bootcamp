const express = require('express');
const router = express.Router();
const {start, guess, showScore} = require('../controllers/trivia.controller.js')

router.get('/', start)
router.post('/', guess)
router.get('/score', showScore)

module.exports = router