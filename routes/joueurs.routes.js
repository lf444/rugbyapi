module.exports = app => {
  const joueurs = require("../controllers/joueurs.controller.js");

  // Create a new Joueur
  app.post("/joueurs", joueurs.create);
 
  // Retrieve all Joueur
  app.get("/joueurs", joueurs.findAll);

   // Retrieve a single Joueur with idJoueur
  app.get("/joueurs/:idJoueur", joueurs.findOne);

  // Update a Joueur with idJoueur
  app.put("/joueurs/:idJoueur", joueurs.update);

  // Delete a Joueur with idJoueur
  app.delete("/joueurs/:idJoueur", joueurs.delete);

};
