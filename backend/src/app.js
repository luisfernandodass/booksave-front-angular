const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const indexRoute = require('./routes/index-routes');
const bookRoute = require('./routes/book-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/books', indexRoute);
app.use('/books', bookRoute);

module.exports = app;