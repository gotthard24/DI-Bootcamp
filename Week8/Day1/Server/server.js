const express = require('express')
const app = express();
const productRouter = require('./routes/products.route.js')
const usersRouter = require('./routes/users.route.js')
const {logger, auth} = require ('./middlewares/utils.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(4070, () =>{
    console.log('Run on 4070');
})

app.use("/users", logger);
// app.use(auth)

app.use("/api/products", productRouter)
app.use("/users", usersRouter)

