const express = require('express');
const router = express.Router();
const { getStats, trackVisit, trackDownload } = require('../controllers/statsController');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, getStats); // Admin access
router.post('/visit', trackVisit); // Public access
router.post('/download', trackDownload); // Public access

module.exports = router;