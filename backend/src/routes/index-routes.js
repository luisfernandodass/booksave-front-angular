const express = require('express');
const router = express.Router();
const responseuser = require('../controllers/book-controller');

router.get('/', (req, res, next) => {
    res.status(200).send(responseuser.module);
});

module.exports = router;