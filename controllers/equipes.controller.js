const Equipe = require("../models/equipes.model.js");

// Create and Save a new Equipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Equipe
  const equipe = new Equipe({
    nom: req.body.nom,
    image: req.body.image
  });

  // Save Equipe in the database
  Equipe.create(equipe, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the equipe."
      });
    else res.send(data);
  });
}; 

// Retrieve all Equipe from the database.
exports.findAll = (req, res) => {
    Equipe.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Equipe."
      });
    else res.send(data);
  });
};

// Find a single Equipe with a idEquipe
exports.findOne = (req, res) => {
    Equipe.findById(req.params.idEquipe, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Equipe with id ${req.params.idEquipe}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Equipe with id " + req.params.idEquipe
        });
      }
    } else res.send(data);
  });
};

// Retrieve all Equipe from the database.
exports.findLast = (req, res) => {
  Equipe.getLast((err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Equipe."
    });
  else res.send(data);
});
};


 // Update a Equipe identified by the idEquipein the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Equipe.updateById(
    req.params.idEquipe,
    new Equipe(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Equipe with id ${req.params.idEquipe}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Equipe with id " + req.params.idEquipe
          });
        }
      } else res.send(data);
    }
  );
};

 // Delete a Equipe with the specified idEquipe in the request
exports.delete = (req, res) => {
    Equipe.remove(req.params.idEquipe, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Equipe with id ${req.params.idEquipe}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Equipe with id " + req.params.idEquipe
        });
      }
    } else res.send({ message: `Equipe was deleted successfully!` });
  });
}; 
