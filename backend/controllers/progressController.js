const asyncHandler = require('express-async-handler');
const Progress = require('../models/progressModel');

// GET /api/progress
const getProgress = asyncHandler(async (req, res) => {
  let progress = await Progress.findOne({ user: req.user.id });

  if (!progress) {
    progress = await Progress.create({ user: req.user.id });
  }

  res.status(200).json(progress);
});

// POST /api/progress
const saveProgress = asyncHandler(async (req, res) => {
  const { level, experience, items } = req.body;

  const progress = await Progress.findOneAndUpdate(
    { user: req.user.id },
    {
      level,
      experience,
      items,
      fechaUltimoGuardado: new Date()
    },
    { new: true, upsert: true }
  );

  res.status(200).json(progress);
});

module.exports = {
  getProgress,
  saveProgress
};
