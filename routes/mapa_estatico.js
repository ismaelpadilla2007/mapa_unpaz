var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mapa_estatico', { title: 'Mapa en tiempo real' });
});

module.exports = router;
