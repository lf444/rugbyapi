const sql = require("../db.js");

// constructor
const Perf = function(Perf) {
  this.idPerf = Perf.idPerf;
  this.datePerf = Perf.datePerf;
  this.squat = Perf.squat;
  this.dcouche = Perf.dcouche;
  this.tirage = Perf.tirage;
  this.detenteVerticale = Perf.detenteVerticale;
  this.tempsSprint = Perf.tempsSprint;
  this.idJoueur = Perf.idJoueur
};

Perf.create = (newPerf, result) => {
  sql.query("INSERT INTO HISTORIQUE_PERF SET ?", newPerf, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.insertId, ...newPerf });
    result(null, { id: res.insertId, ...newPerf });
  });
};


Perf.getAll = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_PERF WHERE idJoueur = ${idJoueur} ORDER BY datePerf ASC`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Blessures: ", res);
    result(null, res);
  });
}; 

Perf.findById = (idJoueur, result) => {
  sql.query(`SELECT * FROM HISTORIQUE_PERF WHERE idJoueur = ${idJoueur} ORDER BY idPerf DESC LIMIT 1`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Blessures: ", res);
    result(null, res);
  });
}; 



module.exports = Perf;
