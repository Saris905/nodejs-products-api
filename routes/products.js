const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsStatic } = require('../controllers/products');

router.route('/').get(getAllProducts); // work with route: /api/v1/products
router.route('/static').get(getAllProductsStatic); // work with route: /api/v1/products/static

module.exports = router;