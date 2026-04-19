require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const projects = require('./routes/projectRoutes')
const authUser =  require('./routes/authRoutes');
const adminRoute = require('./routes/adminRoutes')
const tools = require('./routes/toolRoutes');
const messageRoutes = require('./routes/messageRoutes')
const cvRoutes = require('./routes/cvRoutes');
const statsRoutes = require('./routes/statsRoutes');

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/projects', projects);
app.use('/api/auth', authUser);
app.use('/api/admin', adminRoute)
app.use('/api/tools', tools);
app.use('/api/messages', messageRoutes);
app.use('/api/cv', cvRoutes)
app.use('/api/stats', statsRoutes);


app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});