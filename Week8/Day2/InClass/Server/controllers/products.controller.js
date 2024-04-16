const {products} = require('../config/data.js')
const{_getAllProducts, 
    _getProductById, 
    _createProduct,
    _deleteProductById,
    _changeProductById} = require('../models/products.model.js')

const getAllProducts = (req,res) =>{
    _getAllProducts()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}
const getProductById = (req,res) =>{
    const {id} = req.params
    _getProductById(id)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
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
    const{name,price} = req.body
    _createProduct(name, price)
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const changeProductById = (req,res) =>{
    const {id} = req.params
    const{name,price} = req.body
    _changeProductById(id,name,price)
        .then(data => {
            getAllProducts(req,res)
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

const deleteProductById = (req,res) =>{
    const {id} = req.params
    _deleteProductById(id)
        .then(data => {
            _getAllProducts(req,res)
        })
        .catch(e => {
            res.status(404).json({msg: 'smth went wrong'})
            console.log(e);
        })
}

module.exports = {
    getAllProducts,
    getProductById,
    searchProducts,
    postProduct,
    changeProductById,
    deleteProductById,
}