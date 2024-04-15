const express = require('express');
const app = express();
const router = require('./routes/trivia.route.js')
const port = 3005;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => console.log(`Run on ${port}`));

app.use("/quiz", router)