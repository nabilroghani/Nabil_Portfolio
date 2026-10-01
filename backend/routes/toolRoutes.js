const express = require('express');
const router = express.Router();
const { getTools, addTool, updateTool, deleteTool } = require('../controllers/toolController');
const protect = require('../middleware/authMiddleware');

router.get('/', getTools); // Public: Sab dekh saken
router.post('/', protect, addTool); // Protected: Sirf Admin add kare
router.put('/:id', protect, updateTool); // Protected: Sirf Admin edit kare
router.delete('/:id', protect, deleteTool); // Protected: Sirf Admin delete kare

module.exports = router;