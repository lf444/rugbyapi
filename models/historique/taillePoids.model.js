const sql = require("../db.js");

// constructor
const TP = function(TP) {
  this.idTaillePoids = TP.idTaillePoids;
  this.dateTaillePoids = TP.dateTaillePoids;
  this.poids = TP.poids;
  this.taille = TP.taille;
  this.idJoueur = TP.idJoueur
};

TP.create = (newTP, result) => {
  sql.query("INSERT INTO HISTORIQUE_TAILLE_POIDS SET ?", newTP, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.insertId, ...newTP });
    result(null, { id: res.insertId, ...newTP });
  });
};


TP.getAll = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_TAILLE_POIDS WHERE idJoueur = ${idJoueur} ORDER BY dateTaillePoids ASC`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Blessures: ", res);
    result(null, res);
  });
}; 

TP.findById = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_TAILLE_POIDS WHERE  idJoueur = ${idJoueur} ORDER BY idTaillePoids DESC LIMIT 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Blessures: ", res);
    result(null, res);
  });
}; 



module.exports = TP;
