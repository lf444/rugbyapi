var router = require('express').Router();
const blessures = require('../controllers/historique/blessure.controller.js');

// Create a new blessure
router.post("/:idJoueur/", blessures.create);

// Retrieve all blessure
router.get("/:idJoueur/", blessures.findAll);

// Retrieve a single blessure with idblessure
router.get("/:idJoueur/blessure/:idBlessure", blessures.findOne);

// Update a blessure with idblessure
router.put("/:idJoueur/", blessures.update);

// Delete a blessure with idblessure
router.delete("/:idJoueur/blessure/:idBlessure", blessures.delete);

module.exports = router;