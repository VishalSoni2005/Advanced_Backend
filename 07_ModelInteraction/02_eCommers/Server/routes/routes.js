const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Auth");

// user
router.post("/signup", controllers.signup);

// product
router.get("/products", controllers.getProducts);
router.post('/create-product', controllers.createProduct);

// category
router.get("/categories", controllers.getCategories);
router.post('/create-category', controllers.createCategory);

// order
router.get('/order', controllers.getOrder);
router.post('/create-order', controllers.createOrder);

// carts
router.post('/create-cart', controllers.createCart);
router.get('/cart', controllers.createCart);

module.exports = router;
