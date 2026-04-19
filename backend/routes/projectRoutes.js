const express = require('express');
const router = express.Router();
const { getProjects, createProject, deleteProject } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');

router.get('/', getProjects); // Public: Sab dekh sakte hain
router.post('/', protect, createProject); // Protected: Sirf Admin
router.delete('/:id', protect, deleteProject); // Protected: Sirf Admin

module.exports = router;