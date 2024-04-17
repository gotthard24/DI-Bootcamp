const express = require('express')
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs');

app.listen(process.env.PORT||3001, () => {
    console.log(`run on ${process.env.PORT||3001}`);
})

app.get('/demo', (req, res) => {
    let user = {
        firstname: "John",
        lastname: "Smith"
    }
    let login = false;
    let students = {
        stu1: "buddy1",
        stu2: "buddy2",
        stu3: "buddy3",
    }
    res.render('index', {
        user,
        login,
        students
    })
})

app.get('/shop', (req, res) => {
    res.render('shop')
})