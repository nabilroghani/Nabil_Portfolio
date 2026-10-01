const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const protect = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

router.get('/', getProjects);
router.post('/', protect, upload.single('image'), createProject); // 'image' field name hai
router.put('/:id', protect, upload.single('image'), updateProject); // image optional on edit
router.delete('/:id', protect, deleteProject);

module.exports = router;