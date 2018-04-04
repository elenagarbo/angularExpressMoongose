var mongoose = require('mongoose');

var ArticuloSchema = new mongoose.Schema({
 
  titulo: String,
  fecha: String,
  descripcion: String,
  imagen: String,
});

module.exports = mongoose.model('Articulo', ArticuloSchema);