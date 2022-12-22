var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog', parrafoBienvenida: 'Welcome to My Blog'});
}); //title: lo q sale en la pestaña del navegador; parrafoBienvenida:  el título h1;

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Blog', bienvenida: 'Welcome to My Blog'});
});


module.exports = router;
