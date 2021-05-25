var router = require('express').Router();
const evenements = require('../controllers/evenements.controller.js');

// Create a new evenement
router.post("/", evenements.create);

// Retrieve all evenement
router.get("/", evenements.findAll);

// Delete an evenement with idEvenement
router.delete("/:idEvenement", evenements.delete);

module.exports = router;