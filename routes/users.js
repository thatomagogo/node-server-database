const express = require('express');
const getUser = require('../controllers/users');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('hello world')
})

router.get('/users', getUser)

module.exports = router;