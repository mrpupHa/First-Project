const express = require('express');
const productsRouter = express.Router();
const products = require("./../../data/products.json")

productsRouter.route('/').get((req, res) => {
    res.render("products", {
        products,
    })
});

productsRouter.route('/:id').get((req, res) => { //req.params.id คือการดึงค่าของพารามิเตอร์ id จาก URL ที่ผู้ใช้ร้องขอ ตัวอย่างเช่น ถ้า URL คือ /products/2 ค่าของ id จะเป็น 2
    const id = req.params.id;
    res.render("product", {
        product: products[id],
    })
});


module.exports = productsRouter;