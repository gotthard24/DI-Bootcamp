const express = require('express')
const app = express()
const router = require('./routes/todos.js')
const port = 3003

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => console.log(`Run on ${port}`))

app.use(router)