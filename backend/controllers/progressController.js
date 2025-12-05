const asyncHandler = require("express-async-handler");
const Progress = require("../models/progressModel");

// progreso general
const getProgress = asyncHandler(async (req, res) => {
  let progress = await Progress.findOne({ user: req.user.id });

  // Si el usuario nunca ha guardado progreso, se crea uno por defecto
  if (!progress) {
    progress = await Progress.create({ user: req.user.id });
  }

  res.status(200).json({
    user: progress.user,
    level: progress.level,
    experience: progress.experience,
    items: progress.items,
    objetosDesbloqueados: progress.objetosDesbloqueados,
    fechaUltimoGuardado: progress.fechaUltimoGuardado,
  });
});

// POST /api/progress  
const saveProgress = asyncHandler(async (req, res) => {
  const { level, experience, items } = req.body;

  // Buscar (o crear) el progreso del usuario
  let progress = await Progress.findOne({ user: req.user.id });

  if (!progress) {
    progress = new Progress({ user: req.user.id });
  }

  // Actualizar campos de progreso actual
  if (level !== undefined) {
    progress.level = level;
  }

  if (experience !== undefined) {
    progress.experience = experience;
  }

  if (Array.isArray(items)) {
    // items actuales de la partida
    progress.items = items;

    //Fusionar items con la colección  de objetosDesbloqueados
    const setObjetos = new Set(progress.objetosDesbloqueados || []);
    items.forEach((item) => setObjetos.add(item));
    progress.objetosDesbloqueados = Array.from(setObjetos);
  }

  progress.fechaUltimoGuardado = new Date();

  await progress.save();

  res.status(200).json({
    user: progress.user,
    level: progress.level,
    experience: progress.experience,
    items: progress.items,
    objetosDesbloqueados: progress.objetosDesbloqueados,
    fechaUltimoGuardado: progress.fechaUltimoGuardado,
  });
});

// solo los objetos desbloqueados
const getUnlockedItems = asyncHandler(async (req, res) => {
  let progress = await Progress.findOne({ user: req.user.id });

  if (!progress) {
    progress = await Progress.create({ user: req.user.id });
  }

  res.status(200).json({
    user: progress.user,
    objetosDesbloqueados: progress.objetosDesbloqueados,
  });
});

module.exports = { getProgress, saveProgress, getUnlockedItems };
