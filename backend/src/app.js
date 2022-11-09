const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const config = require('./config');
const app = express();

// Conecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Book = require('./models/book');

// Carrega as rotas
const indexRoute = require('./routes/index-routes');
const bookRoute = require('./routes/book-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/books', indexRoute);
app.use('/books', bookRoute);

module.exports = app;