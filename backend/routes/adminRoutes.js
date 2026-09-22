const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { login } = require("../controllers/authController");
const { loginLimiter } = require("../middleware/rateLimiter");

// --- LOGIN ROUTE ---
router.post("/login", loginLimiter, login);

// --- ONE-TIME SETUP ROUTE ---
// Sirf tab kaam karta hai jab (1) koi admin database mein exist na kare, AND
// (2) request "x-setup-key" header mein ADMIN_SETUP_KEY env var bheje.
// Pehla admin create hone ke baad ye route khud-ba-khud lock ho jata hai.
router.post("/register-secure-admin", async (req, res) => {
    try {
        const setupKey = req.header("x-setup-key");
        if (!process.env.ADMIN_SETUP_KEY || setupKey !== process.env.ADMIN_SETUP_KEY) {
            return res.status(403).json({ message: "Forbidden" });
        }

        const adminCount = await Admin.countDocuments();
        if (adminCount > 0) {
            return res.status(403).json({ message: "Setup already completed" });
        }

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const admin = new Admin({ username, password });
        await admin.save();

        res.status(201).json({
            message: "Admin created successfully with hashed password!",
            username: admin.username
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;