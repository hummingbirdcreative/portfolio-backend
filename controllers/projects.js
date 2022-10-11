const Projects = require('../models/project');
const router = require('express').Router();

// Routes/Controllers
// Index
router.get('/', async (req, res) => {
    try {
      res.status(200).json(await Projects.find({}));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

// Create
router.post('/', async (req, res) => {
    try {
      res.status(201).json(await Projects.create(req.body));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

// Delete
router.delete('/:id', async (req, res) => {
    try {
      res.status(200).json(await Projects.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  })

// Update
router.put('/:id', async (req, res) => {
    try {
      res.status(200).json(
        await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json({ message: 'bad request' });
    }
  });

module.exports = router;