const Evenement = require("../models/evenements.model.js");

// Create and Save a new Evenement
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Evenement
  const evenement = new Evenement({
    nom: req.body.nom,
    description: req.body.description,
    dateTimeDebut: req.body.dateTimeDebut,
    dateTimeFin: req.body.dateTimeFin
  });

  // Save Evenement in the database
  Evenement.create(evenement, (err, data) => {
      if (err)
      res.status(500).send({
          message:
          err.message || "Some error occurred while creating the evenement."
      });
      else res.send(data);
  });
};

// Retrieve all Evenements from the database.
exports.findAll = (req, res) => {
    Evenement.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Evenement."
      });
    else res.send(data);
  });
};