const express = require('express');
const app = express();
const router = require('./routes/users.router.js')
const port = 5001;

app.listen(port, ()=>console.log(`Run on ${port}`));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)