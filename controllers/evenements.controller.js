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

// Delete a Evenement with the specified idEvenement in the request
exports.delete = (req, res) => {
  Evenement.remove(req.params.idEvenement, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Evenement with id ${req.params.idEvenement}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Evenement with id " + req.params.idEvenement
        });
      }
    } else res.send({ message: `Evenement was deleted successfully!` });
  });
};