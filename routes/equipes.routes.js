    var router = require('express').Router();
    const equipes = require("../controllers/equipes.controller.js");
  
    // Create a new equipe
    router.post("/", equipes.create);
   
    // Retrieve all equipe
    router.get("/", equipes.findAll);

    // Retrieve last joueur
    router.get("/last", equipes.findLast);
  
  
     // Retrieve all player equipe with idEquipe
    router.get("/:idEquipe", equipes.findOne);
  
    // Update a equipe with idEquipe
    router.put("/:idEquipe", equipes.update);
  
    // Delete a equipe with idEquipe
    router.delete("/:idEquipe", equipes.delete);


    module.exports = router;