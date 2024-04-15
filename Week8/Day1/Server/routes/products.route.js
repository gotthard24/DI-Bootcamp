const express = require("express")
const router = express.Router();
const {getAllProducts,
    getProductById,
    searchProducts,
    postProduct,
    changeProductById,
    deleteProductById} = require('../controllers/products.controller.js')


router.get('/search', searchProducts)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', postProduct)
router.put('/:id', changeProductById)
router.delete('/:id', deleteProductById)

module.exports = router