var router = require('express').Router();
const joueurs = require("../controllers/joueurs.controller.js");

// Create a new Joueur
router.post("/", joueurs.create);

// Create a new blessure
router.post("/:idJoueur/blessure", joueurs.createBlessure);


// Retrieve all Joueur
router.get("/", joueurs.findAll);

 // Retrieve a single Joueur with idJoueur
 router.get("/:idJoueur", joueurs.findOne);

// Update a Joueur with idJoueur
router.put("/:idJoueur", joueurs.update);

// Delete a Joueur with idJoueur
router.delete("/:idJoueur", joueurs.delete);

module.exports = router;