const sql = require("../db.js");

// constructor
const Blessure = function(Blessure) {
  this.idBlessure = Blessure.idBlessure;
  this.dateBlessure = Blessure.dateBlessure;
  this.tempsRepos = Blessure.tempsRepos;
  this.typeBlessure = Blessure.typeBlessure;
  this.contextBlessure = Blessure.contextBlessure;
  this.idJoueur = Blessure.idJoueur;
};

Blessure.create = (newBlessure, result) => {
  sql.query("INSERT INTO HISTORIQUE_BLESSURE SET ?", newBlessure, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.insertId, ...newBlessure });
    result(null, { id: res.insertId, ...newBlessure });
  });
};


Blessure.findById = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_BLESSURE WHERE idJoueur = ${idJoueur}`, (err, res) => {
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

Blessure.getAll = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_BLESSURE WHERE idJoueur = ${idJoueur}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Blessures: ", res);
    result(null, res);
  });
};

Blessure.updateById = (idJoueur, Blessure, result) => {
  sql.query(
    "UPDATE BLESSURE SET dateBlessure = ?, tempsRepos = ? WHERE idJoueur = ?",
    [Blessure.dateBlessure, Blessure.tempsRepos, idJoueur],
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
      console.log("updated customer: ", { idJoueur: idJoueur, ...Blessure });
      result(null, { idJoueur: idJoueur, ...Blessure });
    }
  );
}; 

Blessure.remove = (idJoueur, result) => {
  sql.query("DELETE FROM HISTORIQUE_BLESSURE WHERE idJoueur = ?", idJoueur, (err, res) => {
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
    console.log("deleted Blessure with idJoueur: ", idJoueur);
    result(null, res);
  });
};


module.exports = Blessure;
