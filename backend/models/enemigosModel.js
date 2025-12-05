const mongoose = require('mongoose');

const enemigoSchema = mongoose.Schema({
  tipo: {
    type: String,
    enum: ['cuerpoACuerpo', 'distancia', 'jefe'],
    required: true
  },

  vida: {
    type: Number,
    required: true
  },

  daño: {
    type: Number,
    required: true
  },

  posicionInicial: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 }
  },

  comportamientoIA: {
    type: String,
    enum: ['agresivo', 'defensivo'],
    default: 'agresivo'
  }

}, { timestamps: true });

module.exports = mongoose.model('Enemigo', enemigoSchema);
