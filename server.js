const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");

const app = express();
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/* 
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
}); */


app.use('/joueurs', require('./routes/joueurs.routes'));
app.use('/equipes', require('./routes/equipes.routes'));
app.use('/blessures', require('./routes/blessures.routes.js'));
app.use('/perfomances', require('./routes/perf.routes.js'));
app.use('/tp', require('./routes/taillePoids.routes.js'));
app.use('/evenements', require('./routes/evenements.routes.js'));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



// http://localhost:3000/joueurs/