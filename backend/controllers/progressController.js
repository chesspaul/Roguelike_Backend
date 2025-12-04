const asyncHandler = require("express-async-handler");
const Progress = require("../models/progressModel");

// GET /api/progress - obtiene el progreso actual del usuario
const getProgress = asyncHandler(async (req, res) => {
  let progress = await Progress.findOne({ user: req.user.id });

  // Si el usuario nunca ha guardado progreso, se crea uno por defecto
  if (!progress) {
    progress = await Progress.create({ user: req.user.id });
  }

  // Solo regresamos los campos importantes
  res.status(200).json({
    user: progress.user,
    level: progress.level,
    experience: progress.experience,
    items: progress.items,
    fechaUltimoGuardado: progress.fechaUltimoGuardado,
  });
});

// POST /api/progress - guarda / actualiza el progreso del usuario
const saveProgress = asyncHandler(async (req, res) => {
  const { level, experience, items } = req.body;

  // Solo actualizamos los campos que nos interesan
  const updateData = {
    fechaUltimoGuardado: new Date(),
  };

  if (level !== undefined) {
    updateData.level = level;
  }

  if (experience !== undefined) {
    updateData.experience = experience;
  }

  if (items !== undefined) {
    updateData.items = items;
  }

  const progress = await Progress.findOneAndUpdate(
    { user: req.user.id },
    updateData,
    { new: true, upsert: true }
  );

  // De nuevo, respondemos solo con lo importante
  res.status(200).json({
    user: progress.user,
    level: progress.level,
    experience: progress.experience,
    items: progress.items,
    fechaUltimoGuardado: progress.fechaUltimoGuardado,
  });
});

module.exports = {
  getProgress,
  saveProgress,
};
