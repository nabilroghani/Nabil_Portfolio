const express = require('express');
const router = express.Router();
const { getStats, trackVisit, trackDownload } = require('../controllers/statsController');

router.get('/', getStats); // Admin access
router.post('/visit', trackVisit); // Public access
router.post('/download', trackDownload); // Public access

module.exports = router;