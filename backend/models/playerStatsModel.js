const mongoose = require('mongoose');

const estadisticasSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  enemigosEliminados: {
    type: Number,
    default: 0
  },
  jefesDerrotados: {
    type: Number,
    default: 0
  },
  tiempoJugadoTotal: { 
    type: Number,
    default: 0
  },
  nivelesCompletados: {
    type: Number,
    default: 0
  },
  runsTotales: {
    type: Number,
    default: 0
  },
  runsGanadas: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model('EstadisticasJugador', estadisticasSchema);
