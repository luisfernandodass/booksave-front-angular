'use strict';

const mongoose = require('mongoose');
const Book = mongoose.model('Book');

exports.get = (req, res, next) => {
    Book.find({})
      .then(books => {
        res.status(200).send(books);
      }).catch(err => {
        res.status(400).send({ message: 'Não foi possível consultar os livros cadastrados, tente novamente!', data: err });
      });
}

exports.getByTitle = (req, res, next) => {
    Book.findOne({ title: req.params.title })
      .then(books => {
        res.status(200).send(books);
      }).catch(err => {
        res.status(400).send({ message: 'Não foi possível consultar os livros cadastrados, tente novamente!', data: err });
      });
}

exports.post = (req, res, next) => {
    const book = new Book();
    book.title = req.body.title;
    book.description = req.body.description;
    book.save()
    .then(x => {
        res.status(201).send({ message: 'Livro cadastrado com sucesso!' });
    }).catch(err => {
        res.status(400).send({ message: 'Livro não cadastrado, algo errado aconteceu', data: err });
    });
}

exports.put = (req, res, next) => { 
  Book.findOne({ title: req.params.title })
  .then((book) => {
        book.title = req.title;
        book.description = req.description;
        res.status(204).send({
            message: 'Livro atualizado com sucesso!'
        });
    }).catch(err => {
        res.status(400).send({
            message: 'Falha ao atualizar livro',
            data: err
        }); 
    });
}

exports.delete = (req, res, next) => {
    Book.findOneAndRemove({ title: req.params.title })
    .then(book => {
        res.status(204).send({
            message: 'Livro removido com sucesso!'
        });
    }).catch(err => {
        res.status(400).send({
            message: 'Falha ao remover livro',
            data: err
        }); 
    });
}
