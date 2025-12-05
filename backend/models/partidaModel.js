const mongoose = require('mongoose');

const runSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  hpActual: {
    type: Number,
    default: 100
  },
  hpMaximo: {
    type: Number,
    default: 100
  },

  nivelActual: {
    type: Number,
    default: 1
  },

  armaActual: {
    type: String,
    default: null
  },

  sinergiasActivas: [{
    type: String
  }],

  enemigosGenerados: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enemigo'
  }],

  fechaGuardado: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

module.exports = mongoose.model('Run', runSchema);
