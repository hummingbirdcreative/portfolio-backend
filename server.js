// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Initialize App
const app = express();

// Configure Settings
require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log(`MongoDB Error: ${error.message}`));

// Mount Routes
app.get('/', (req, res) => {
  res.send('hello portfolio');
});

// Tell app to listen
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});