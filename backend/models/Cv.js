const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
    driveId: { type: String, required: true }, // Sirf Google Drive ki ID save hogi
}, { timestamps: true });

module.exports = mongoose.model('Cv', cvSchema);