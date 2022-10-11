// Dependencies
const express = require('express');

// Initialize App
const app = express();

// Configure Settings
require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB using Mongoose

// Mount Middleware

// Mount Routes
app.get('/', (req, res) => {
  res.send('hello portfolio');
});

// Tell app to listen
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});