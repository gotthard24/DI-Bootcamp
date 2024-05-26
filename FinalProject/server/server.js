const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

app.listen(3001, ()=>{
    console.log('Server is open');
})