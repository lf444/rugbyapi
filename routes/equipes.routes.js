module.exports = app => {
    const equipes = require("../controllers/equipes.controller.js");
  
    // Create a new equipe
    app.post("/equipes", equipes.create);
   
    // Retrieve all equipe
    app.get("/equipes", equipes.findAll);
  
     // Retrieve a single equipe with idEquipe
    app.get("/equipes/:idEquipe", equipes.findOne);
  
    // Update a equipe with idEquipe
    app.put("/equipes/:idEquipe", equipes.update);
  
    // Delete a equipe with idEquipe
    app.delete("/equipes/:idEquipe", equipes.delete);
  
  };
  