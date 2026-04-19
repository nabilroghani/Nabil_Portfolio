const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true }, // e.g., "FaReact" ya "SiMongodb"
    category: { type: String, enum: ['Frontend', 'Backend', 'Database', 'Tools'], default: 'Tools' }
});

module.exports = mongoose.model('Tool', toolSchema);