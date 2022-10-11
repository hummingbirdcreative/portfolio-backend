// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const logger = require("morgan");
const projectsRouter = require('./controllers/projects');

// Initialize App
const app = express();
require("dotenv").config();

// Configure Settings
require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log(`MongoDB Error: ${error.message}`));

app.use(cors()); 
app.use(logger("dev")); 
app.use(express.json()); 

// Mount Routes
app.get('/', (req, res) => {
  res.send('hello portfolio');
});

// API Route
app.use('/api/projects', projectsRouter);

// Fallback Route
app.get('/*', (req, res) => {
    res.status(404).json({ message: 'not found' })
});

// Tell app to listen
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});