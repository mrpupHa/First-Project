const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Create a URL object from import.meta.url


const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"public/")));

app.get("/", (req, res) => {
    res.send("Hello");

})


app.listen(port, () => {
    debug(`Listening on port ${port}`);
})