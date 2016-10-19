var express = require('express');
var router = express.Router();

var Cheese = require('../models/cheeses');

router.get('/', function(req, res) {
  res.locals.title = 'NYC Cheeses';
  res.render('index');
});

router.get('/bylocation', function(req, res) {
  res.locals.title = 'Search By Location';
  res.render('bylocation');
});

router.get('/submit', function(req, res) {
  res.locals.title = 'Submit';
  res.render('submit');

router.post('/submit', function(req, res) {
  res.render('submit');
});


module.exports = router;