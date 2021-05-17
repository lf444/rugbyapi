const sql = require("./db.js");

// constructor
const Joueur = function(joueur) {
  this.idJoueur = joueur.idJoueur;
  this.nom = joueur.nom;
  this.prenom = joueur.prenom;
  this.poste = joueur.poste;
  this.dateNaissance = joueur.dateNaissance;
  this.email = joueur.email;
  this.telephone = joueur.telephone;
  this.idEquipe = joueur.idEquipe;

};

Joueur.create = (newJoueur, result) => {
  sql.query("INSERT INTO JOUEUR SET ?", newJoueur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.insertId, ...newJoueur });
    result(null, { id: res.insertId, ...newJoueur });
  });
};

Joueur.findById = (idJoueur, result) => {
  sql.query(`SELECT * FROM JOUEUR WHERE idJoueur = ${idJoueur}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
}; 

Joueur.getAll = result => {
  sql.query("SELECT * FROM JOUEUR", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Joueurs: ", res);
    result(null, res);
  });
};

 Joueur.updateById = (idJoueur, joueur, result) => {
  sql.query(
    "UPDATE JOUEUR SET nom = ?, prenom = ?, poste = ?, dateNaissance = ?, email = ?, telephone = ? WHERE idJoueur = ?",
    [joueur.nom, joueur.prenom, joueur.poste,joueur.dateNaissance, joueur.email, joueur.telephone, idJoueur],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated customer: ", { idJoueur: idJoueur, ...joueur });
      result(null, { idJoueur: idJoueur, ...joueur });
    }
  );
}; 

Joueur.remove = (idJoueur, result) => {
  sql.query("DELETE FROM JOUEUR WHERE idJoueur = ?", idJoueur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted joueur with idJoueur: ", idJoueur);
    result(null, res);
  });
};


module.exports = Joueur;
