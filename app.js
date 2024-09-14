const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json")
const productRouter = express.Router();


// Create a URL object from import.meta.url


const app = express();
const port = 3000;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"public")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// Define routes
productRouter.route('/').get((req, res) => {
    res.render("products", {
        products,
    })
});

productRouter.route('/:id').get((req, res) => {
    const id = req.params.id;
    res.send('Hello boy # ' + id);
});


app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    debug(`Listening on port ${port}`);
})