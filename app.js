const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Create a URL object from import.meta.url


const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");

})


app.listen(port, () => {
    debug(`Listening on port ${port}`);
})