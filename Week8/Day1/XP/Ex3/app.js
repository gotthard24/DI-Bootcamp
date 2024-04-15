const express = require('express');
const app = express();
const router = require('./routes/books.route.js')
const port = 3004;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => console.log(`Run on ${port}`));

app.use(router)