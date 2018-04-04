var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Articulo = require('../models/Articulo.js');
var Dato = require('../models/Dato.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Articulo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Dato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router; 