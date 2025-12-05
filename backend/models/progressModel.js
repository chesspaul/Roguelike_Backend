const mongoose = require('mongoose');

const progressSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Progreso de la partida actual
  level: {
    type: Number,
    default: 1
  },
  experience: {
    type: Number,
    default: 0
  },
  items: [
    {
      type: String
    }
  ],
  // Historial de todo lo que el jugador ha desbloqueado
  objetosDesbloqueados: [
    {
      type: String
    }
  ],
  fechaUltimoGuardado: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Progress', progressSchema);
