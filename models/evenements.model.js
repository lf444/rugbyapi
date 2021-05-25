const sql = require("./db.js");

// constructor
const Evenement = function(evenement) {
  this.idEvenement = evenement.idEvenement;
  this.nom = evenement.nom;
  this.description = evenement.description;
  this.dateTimeDebut = evenement.dateTimeDebut;
  this.dateTimeFin = evenement.dateTimeFin;
};

Evenement.create = (newEvenement, result) => {
    sql.query("INSERT INTO EVENEMENT SET ?", newEvenement, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created evenement: ", { id: res.insertId, ...newEvenement });
        result(null, { id: res.insertId, ...newEvenement });
    });
};

Evenement.getAll = result => {
    sql.query("SELECT * FROM EVENEMENT", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Evenements: ", res);
        result(null, res);
    });
};

Evenement.remove = (idEvenement, result) => {
    sql.query("DELETE FROM EVENEMENT WHERE idEvenement = ?", idEvenement, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted Evenement with idEvenement: ", idEvenement);
        result(null, res);
    });
};

module.exports = Evenement;