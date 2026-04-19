require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isPDF = file.mimetype === 'application/pdf';
    return {
      folder: isPDF ? 'portfolio_cv' : 'portfolio_projects',
      // PDF ke liye resource_type 'raw' hona lazmi hai taake formatting kharab na ho
      resource_type: isPDF ? 'raw' : 'image',
      public_id: isPDF ? `cv_nabil_${Date.now()}` : undefined,
      // Sirf allowed formats ko filter karein
      allowed_formats: isPDF ? ['pdf'] : ['jpg', 'png', 'jpeg', 'webp'],
    };
  },
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

module.exports = { cloudinary, upload };