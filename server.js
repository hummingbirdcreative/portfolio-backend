// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require("morgan");

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
app.use(morgan("dev")); 
app.use(express.json()); 

// Define models
const Schema = mongoose.Schema;
const projectsSchema = new Schema({
    image: {
        type: String,
        default: "https://billfish.org/wp-content/uploads/2019/08/placeholder-image-705x529.jpg"
    },
    title: String,
    description: String,
    link: String,
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectsSchema)

// Mount Routes
app.get('/', (req, res) => {
  res.send('hello portfolio');
});

// Routes/Controllers
// Index
app.get('/projects', async (req, res) => {
    try {
      res.status(200).json(await Projects.find({}));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

// Create
app.post('/projects', async (req, res) => {
    try {
      res.status(201).json(await Projects.create(req.body));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

// Delete
app.delete('/projects/:id', async (req, res) => {
    try {
      res.status(200).json(await Projects.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  })

// Update
app.put('/projects/:id', async (req, res) => {
    try {
      res.status(200).json(
        await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

// Tell app to listen
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});