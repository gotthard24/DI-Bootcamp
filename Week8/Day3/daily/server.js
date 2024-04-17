const express = require('express');
const app = express();
const router = require('./routes/users.router.js')
const cors = require('cors')
const port = 5001;


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(cors({origin: true, credentials: true}))

app.listen(port, ()=>console.log(`Run on ${port}`));
app.use(router)