const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    stack: [{ type: String }], // Array of strings (e.g., ["React", "Node"])
    liveLink: { type: String },
    githubLink: { type: String },
    image: { type: String } // Cloudinary URL
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);