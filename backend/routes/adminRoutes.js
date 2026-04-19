const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin"); 
const { login } = require("../controllers/authController");

// --- LOGIN ROUTE ---
router.post("/login", login);

// --- TEMPORARY REGISTER ROUTE (Sirf ek baar use karne ke liye) ---
router.post("/register-secure-admin", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check karein ke admin pehle se tu nahi bana hua
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists!" });
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