const Joueur = require("../models/joueurs.model.js");

// Create and Save a new Joueur
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Joueur
  const joueur = new Joueur({
    nom: req.body.nom,
    prenom: req.body.prenom,
    poste: req.body.poste,
    dateNaissance: req.body.dateNaissance,
    email:req.body.email,
    telephone:req.body.telephone,
    idEquipe: req.body.idEquipe
  });

  // Save Joueur in the database
  Joueur.create(joueur, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the joueur."
      });
    else res.send(data);
  });
}; 

// Find a single Joueur with a idJoueur
exports.createBlessure = (req, res) => {
  Joueur.createBlessure(req.params.idJoueur, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found joueur with id ${req.params.idJoueur}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving joueur with id " + req.params.idJoueur
        });
      }
    } else res.send(data);
  });
};


// Retrieve all Joueur from the database.
exports.findAll = (req, res) => {
  Joueur.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving joueurs."
      });
    else res.send(data);
  });
};

// Find a single Joueur with a idJoueur
exports.findOne = (req, res) => {
  Joueur.findById(req.params.idJoueur, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found joueur with id ${req.params.idJoueur}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving joueur with id " + req.params.idJoueur
        });
      }
    } else res.send(data);
  });
};

 // Update a Joueur identified by the idJoueur in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Joueur.updateById(
    req.params.idJoueur,
    new Joueur(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found joueur with id ${req.params.idJoueur}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating joueur with id " + req.params.idJoueur
          });
        }
      } else res.send(data);
    }
  );
};

 // Delete a Joueur with the specified idJoueur in the request
exports.delete = (req, res) => {
  Joueur.remove(req.params.idJoueur, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found joueur with id ${req.params.idJoueur}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete joueur with id " + req.params.idJoueur
        });
      }
    } else res.send({ message: `joueur was deleted successfully!` });
  });
}; 
