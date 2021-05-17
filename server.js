const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
/* 
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
}); */
/* 
require("./routes/joueurs.routes.js")(app); */

app.use('/joueurs', require('./routes/joueurs.routes'));
app.use('/equipes', require('./routes/equipes.routes'));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// http://localhost:3000/joueurs/