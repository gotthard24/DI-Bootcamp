const {db, products} = require('../config/data.js');

const _getAllProducts = () =>{
    return db('products').select('id','name','price').orderBy('id');
};

const _getProductById = (prod_id) =>{
    return db('products').select('id','name','price').where({id:prod_id})
}

const _createProduct = (name, price) =>{
    return db('products').insert({name, price}, ['id','name','price']);
}

const _deleteProductById = (id) =>{
    return db('products').del().where({id}).returning('id','name','price')
}

const _changeProductById = (id, name, price) =>{
    return db('products').update({name,price}).where({id})
}
module.exports = {
    _getAllProducts,
    _getProductById,
    _createProduct,
    _changeProductById,
    _deleteProductById
};