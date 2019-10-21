const express = require("express");
const app = express();
const book = require("./salleSpectacle.json");

app.get("/availabilities", (req, res) => {
  const date = req.query.date;
  res.send("Vous cherchez des places pour la date :  " + date);
});

app.listen(3000, () => {
  console.log("Serveur has started ");
});
