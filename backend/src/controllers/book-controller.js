'use strict';

const response = [
    {
        title: "Livro 1",
        description: "Dahora",
    }
];


exports.post = (req, res, next) => {
    response.push(req.body)
    res.status(201).send(response);
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(204).send({ 
        id: id, 
        item: req.body 
    });
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
}

exports.module = response;