const express = require('express')
const app = express()
const router = require('./routes/route.js')

app.listen(3002, () => console.log('Run on 3002'))

app.use(router)