var router = require('express').Router();
const perf = require('../controllers/historique/perf.controller.js');

// Create a new blessure
router.post("/:idJoueur/", perf.create);

// Retrieve all blessure
router.get("/:idJoueur/all", perf.findAll);

 // Retrieve a single blessure with idblessure
 router.get("/:idJoueur/one", perf.findOne);


module.exports = router;