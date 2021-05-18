const Perf = require('../../models/historique/perf.model.js');

// Create and Save a new Blessure
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a perf
  const perf = new Perf({
    datePerf: req.body.datePerf,
    squat: req.body.squat,
    dcouche: req.body.dcouche,
    tirage:  req.body.tirage,
    detenteVerticale: req.body.detenteVerticale,
    tempsSprint:  req.body.tempsSprint,
    idJoueur: req.body.idJoueur,
  });

  // Save perf in the database
  Perf.create(perf, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the perf."
      });
    else res.send(data);
  });
}; 

// Retrieve all perf for one joueur .
exports.findAll = (req, res) => {
    Perf.getAll(req.params.idJoueur,(err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found perf with id ${req.params.idJoueur}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving perf with id " + req.params.idJoueur
          });
        }
      } else res.send(data);
  });
};

// Find the last  perf for one joueur
exports.findOne = (req, res) => {
    Perf.findById(req.params.idJoueur, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found perf with id ${req.params.idJoueur}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving perf with id " + req.params.idJoueur
        });
      }
    } else res.send(data);
  });
};



