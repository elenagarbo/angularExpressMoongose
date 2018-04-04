var mongoose = require('mongoose');

var DatoSchema = new mongoose.Schema({
 
  email: String,
  pregunta: String,
  fecha: String,
  
});

module.exports = mongoose.model('Dato', DatoSchema);