var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('buscar', { title: 'Mapa Dinámico' });
});

module.exports = router;