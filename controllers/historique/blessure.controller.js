const Blessure = require('../../models/historique/blessure.model.js');

// Create and Save a new Blessure
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Blessure
  const blessure = new Blessure({
    dateBlessure: req.body.dateBlessure,
    tempsRepos: req.body.tempsRepos,
    typeBlessure: req.body.typeBlessure,
    contextBlessure:  req.body.contextBlessure,
    idJoueur: req.body.idJoueur,
  });

  // Save Blessure in the database
  Blessure.create(blessure, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blessure."
      });
    else res.send(data);
  });
}; 

// Retrieve all Blessure from the database.
exports.findAll = (req, res) => {
  Blessure.getAll(req.params.idJoueur,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blessures."
      });
    else res.send(data);
  });
};

// Find a single Blessure with a idBlessure
exports.findOne = (req, res) => {
  Blessure.findById(req.params.idBlessure, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Blessure with id ${req.params.idBlessure}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Blessure with id " + req.params.idBlessure
        });
      }
    } else res.send(data);
  });
};

 // Update a Blessure identified by the idBlessure in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Blessure.updateById(
    req.params.idJoueur,
    new Blessure(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Blessure with id ${req.params.idJoueur}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Blessure with id " + req.params.idJoueur
          });
        }
      } else res.send(data);
    }
  );
};

 // Delete a Blessure with the specified idBlessure in the request
exports.delete = (req, res) => {
  Blessure.remove(req.params.idBlessure, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Blessure with id ${req.params.idBlessure}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Blessure with id " + req.params.idBlessure
        });
      }
    } else res.send({ message: `Blessure was deleted successfully!` });
  });
}; 
