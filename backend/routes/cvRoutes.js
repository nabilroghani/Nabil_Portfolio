const express = require('express');
const router = express.Router();
const { getCv, uploadCv } = require('../controllers/cvController');
const protect = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

router.get('/', getCv); // Sab dekh saken
router.post('/upload', protect, upload.single('resume'), uploadCv);

module.exports = router;