const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, deleteMessage } = require('../controllers/messageController');
const protect = require('../middleware/authMiddleware');

// Public route (Contact form ke liye)
router.post('/', sendMessage);

router.get('/', protect, getMessages);
router.delete('/:id', protect, deleteMessage);

module.exports = router;