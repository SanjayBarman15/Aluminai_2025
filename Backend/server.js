const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // <-- Add this line

// Load environment variables
dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Sample route
app.get('/', (req, res) => {
    res.send('Alumni Management Backend is running (demo mode, no DB)');
});

// Sample route
app.get('/', (req, res) => {
    res.send('Alumni Management Backend is running');
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/alumni', require('./routes/alumni'));
app.use('/api/message', require('./routes/message'));
app.use('/api/post', require('./routes/post'));
app.use('/api/event', require('./routes/event'));

// Geo-intelligent networking routes
app.use('/api/geo', require('./routes/geo'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
