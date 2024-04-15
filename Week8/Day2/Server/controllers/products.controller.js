const {products} = require('../config/data.js')

const getAllProducts = (req,res) =>{
    res.json(products)
}
const getProductById = (req,res) =>{
    console.log(req.params);
    const product = products.find(obj => obj.id == req.params.id);

    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
}

const searchProducts = (req,res) =>{
    const {name} = req.query
    const filtered = products.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    })
    console.log(req.query);
    if(filtered.length === 0){
        return res.status(404).json({msg: 'no product found'})
    }
    res.status(200).json(filtered)
}

const postProduct = (req,res) =>{
    console.log(req.body);
    products.push(req.body)
    res.send(products)
}

const changeProductById = (req,res) =>{
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
}

const deleteProductById = (req,res) =>{
    const {id} = req.params
    const index = products.findIndex(obj => obj.id == id)

    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }

    products.splice(index,1)

    res.json(products)
}

module.exports = {
    getAllProducts,
    getProductById,
    searchProducts,
    postProduct,
    changeProductById,
    deleteProductById,
}