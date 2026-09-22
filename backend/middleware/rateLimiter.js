const rateLimit = require('express-rate-limit');

// Brute-force protection for admin login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: { message: 'Too many login attempts. Please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Spam protection for the public contact form
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    message: { message: 'Too many messages sent. Please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = { loginLimiter, contactLimiter };
