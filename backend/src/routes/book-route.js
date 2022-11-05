'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/book-controller');

router.get('/', controller.get);
router.get('/:title', controller.getByTitle);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:title', controller.delete);

module.exports = router; 