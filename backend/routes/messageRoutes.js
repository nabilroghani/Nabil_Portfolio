const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, deleteMessage } = require('../controllers/messageController');
const protect = require('../middleware/authMiddleware');
const { contactLimiter } = require('../middleware/rateLimiter');

// Public route (Contact form ke liye)
router.post('/', contactLimiter, sendMessage);

router.get('/', protect, getMessages);
router.delete('/:id', protect, deleteMessage);

module.exports = router;