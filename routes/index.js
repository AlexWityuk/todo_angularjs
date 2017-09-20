var home = require('../app/controllers/home');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/all',home.getAll_list);
router.post('/insert', home.createPost);
router.put('/checked/:id', home.update);
module.exports = router;
