const mongoose = require('mongoose');

const nivelSchema = mongoose.Schema({
  numeroNivel: {
    type: Number,
    required: true
  },

  tipo: {
    type: String,
    enum: ['nivel1', 'nivel2', 'nivel3', 'nivel4', 'jefe', 'random'],
    default: 'random'
  },

  semillaGeneracion: { //la semilla es como que el codigo del mundo que varia entre mundo y mundo
    type: String,
    required: true
  },

  enemigos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enemigo'
  }],

  jefe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enemigo',
    default: null
  }

}, { timestamps: true });

module.exports = mongoose.model('Nivel', nivelSchema);
