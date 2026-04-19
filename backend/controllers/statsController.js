// controllers/statsController.js
const Stats = require('../models/Stats');

// Stats get karne ke liye (Admin ke liye)
exports.getStats = async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) stats = await Stats.create({ pageVisits: 0, resumeDownloads: 0 });
    res.json(stats);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Visit barhane ke liye
exports.trackVisit = async (req, res) => {
  try {
    await Stats.findOneAndUpdate({}, { $inc: { pageVisits: 1 } }, { upsert: true });
    res.status(200).send();
  } catch (err) { res.status(500).send(); }
};

// Download barhane ke liye
exports.trackDownload = async (req, res) => {
  try {
    await Stats.findOneAndUpdate({}, { $inc: { resumeDownloads: 1 } }, { upsert: true });
    res.status(200).send();
  } catch (err) { res.status(500).send(); }
};