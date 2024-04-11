// const http = require('http')

// const server = http.createServer((request, response) =>{
//     console.log(request.method);
//     response.end('<h1>Hello</h1>')
// })

// server.listen(5000)

const express = require('express')
const {products} = require('./config/data.js')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(4070, () =>{
    console.log('Run on 4070');
})

// app.get('/users', (req, res) =>{
//     res.json(products)
// })

app.get('/api/products', (req,res) =>{
    res.json(products)
})

app.get('/api/products/:id', (req,res) =>{
    console.log(req.params);
    const product = products.find(obj => obj.id == req.params.id);

    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
})

app.get('/api/search', (req,res) =>{
    const {name} = req.query
    const filtered = products.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    console.log(req.query);
    if(filtered.length === 0){
        return res.status(404).json({msg: 'no product found'})
    }
    res.status(200).json(filtered)
})

app.post('/api/products', (req,res) =>{
    console.log(req.body);
    products.push(req.body)
    res.send(products)
})

app.put('/api/products/:id', (req,res) =>{
    const {id} = req.params
    const {name, price} = req.body
    const index = products.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    products[index] = {
        ...products[index],
        name,
        price,
    }

    res.json(products)
})

app.delete('/api/products/:id', (req,res) =>{
    const {id} = req.params
    const index = products.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    products.splice(index,1)

    res.json(products)
})