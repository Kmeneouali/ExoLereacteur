const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // Créer un serveur
const visitsGetRoutes = require("./routes/visitsGet");
const visitsPostRoutes = require("./routes/visitsPost");
app.use(visitsGetRoutes);
app.use(visitsPostRoutes);
app.listen(3000, () => {
  console.log("Server started");
});
