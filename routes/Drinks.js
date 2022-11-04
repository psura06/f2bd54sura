var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Drinks', { title: 'Pooja Sura Search Results' });
});

module.exports = router;