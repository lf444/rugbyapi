var router = require('express').Router();
const tp = require('../controllers/historique/taillePoids.controller.js');

// Create a new blessure
router.post("/:idJoueur/", tp.create);

// Retrieve all blessure
router.get("/:idJoueur/all", tp.findAll);

 // Retrieve a single blessure with idblessure
 router.get("/:idJoueur/one", tp.findOne);


module.exports = router;