const sql = require("./db.js");

// constructor
const Equipe = function(equipe) {
  this.idEquipe = equipe.idEquipe;
  this.nom = equipe.nom;
};

Equipe.create = (newEquipe, result) => {
  sql.query("INSERT INTO EQUIPE SET ?", newEquipe, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created customer: ", { id: res.insertId, ...newEquipe });
    result(null, { id: res.insertId, ...newEquipe });
  });
};

Equipe.findById = (idEquipe, result) => {
  sql.query(`SELECT JOUEUR.idJoueur, nom, prenom, poste, ADDDATE(MAX(dateBlessure), INTERVAL tempsRepos DAY) as dateFinBlessure
  FROM JOUEUR, BLESSURE
  WHERE JOUEUR.idEquipe= ${idEquipe}
  AND JOUEUR.idJoueur = BLESSURE.idJoueur
  GROUP BY JOUEUR.idJoueur`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Equipe: ", res);
    result(null, res);
  });
}; 

Equipe.getAll = result => {
  sql.query("SELECT * FROM EQUIPE", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Equipe: ", res);
    result(null, res);
  });
};

Equipe.getLast = result => {
  sql.query("SELECT idJoueur FROM JOUEUR ORDER BY idJoueur DESC LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Equipe: ", res);
    result(null, res);
  });
};

Equipe.updateById = (idEquipe, equipe, result) => {
  sql.query(
    "UPDATE EQUIPE SET nom = ? WHERE idEquipe = ?",
    [equipe.nom, idEquipe],
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
      console.log("updated customer: ", { idEquipe: idEquipe, ...equipe });
      result(null, { idEquipe: idEquipe, ...equipe });
    }
  );
}; 

Equipe.remove = (idEquipe, result) => {
  sql.query("DELETE FROM EQUIPE WHERE idEquipe = ?", idEquipe, (err, res) => {
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
    console.log("deleted Equipe with idEquipe: ", idEquipe);
    result(null, res);
  });
};


module.exports = Equipe;
