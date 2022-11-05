const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

router.get('/', (req, res, next) => {
    Book.find({})
      .then(books => {
        res.status(200).send(books);
      }).catch(err => {
        res.status(400).send({ message: 'Não foi possível consultar os livros cadastrados, tente novamente!', data: err });
      });
});

module.exports = router;