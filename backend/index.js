require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const projects = require('./routes/projectRoutes');
const authUser = require('./routes/authRoutes');
const adminRoute = require('./routes/adminRoutes');
const tools = require('./routes/toolRoutes');
const messageRoutes = require('./routes/messageRoutes');
const cvRoutes = require('./routes/cvRoutes');
const statsRoutes = require('./routes/statsRoutes');

// Database Connection
connectDB();

const app = express();

// CORS Configuration
const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};

// 1. Sabse pehle CORS apply karein
app.use(cors(corsOptions));

// 2. FIXED: Preflight requests handle karne ka sabse safe tarika
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', req.header('origin'));
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        return res.sendStatus(200);
    }
    next();
});

// Standard Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/projects', projects);
app.use('/api/auth', authUser);
app.use('/api/admin', adminRoute);
app.use('/api/tools', tools);
app.use('/api/messages', messageRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/stats', statsRoutes);

app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Error Handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});