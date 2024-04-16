const express = require('express');
const app = express();
const router = require('./routes/books.router.js')
const port = 5000;

app.listen(port, ()=>console.log(`Run on ${port}`));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/books', router)