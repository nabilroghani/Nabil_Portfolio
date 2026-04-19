// models/Stats.js
const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  pageVisits: { type: Number, default: 0 },
  resumeDownloads: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Stats', statsSchema);