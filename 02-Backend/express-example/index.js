const express = require("express"); // Recuperation du package express

const app = express(); // Initialisation d'express
const foot = require("./foot.json"); // on recupere l'objet foot du fichier foot.json

app.get("/", (request, response) => {
  if (request.query.firstname === undefined)
    // On check l'existance du params firstname
    return response.status(400).send("400 Bad Request"); // si pas trouve => erreur
  response.send(
    "Bonjour " + request.query.firstname + " tu es un " + request.query.gender
  ); // on repond au client avec les parametres present dans la query
});

app.get("/test/:lang/bonjour", (request, response) => {
  const lang = request.params.lang; // on recupere le params :lang
  if (lang === "fr") {
    // on repond des choses differentes par rapport au params :lang
    response.send("Bonjour");
  } else if (lang === "de") {
    response.send("Gutten tag");
  } else {
    response.send("Hello");
  }
});

app.get("/hello", (req, res) => {
  res.send(foot); // on renvoit l'objet foot en entier.
});

app.get("/bonjour", (req, res) => {
  res.send("Bonjour"); // on renvoit "Bonjour" au client
});

app.get("/holla", (req, res) => {
  res.send("Bonjour"); // on renvoit "Bonjour" au client
});

// /foot/:rounds/:matches
app.get("/foot/:rounds/:matches", (req, res) => {
  const rounds = req.params.rounds; // On recupere le parametre :rounds de l'URL
  const matches = req.params.matches; // On recupere le parametre :matches de l'URL
  const sizeRounds = foot.rounds.length;

  if (rounds > sizeRounds) {
    return res
      .status(400)
      .send(
        "Votre premier paramètre est supérieur à la longueur de la table Rounds (" +
          rounds +
          ">" +
          sizeRounds +
          ")"
      );
  } else {
    const sizeMatches = foot.rounds[rounds].matches.length;
    if (matches > sizeMatches) {
      return res
        .status(400)
        .send(
          "Votre deuxieme paramètre est supérieur à la longueur de la table Matches (" +
            matches +
            ">" +
            sizeMatches +
            ")"
        );
    }
  }
  const match = foot.rounds[rounds].matches[matches]; // On va chercher dans l'objet le matchs correspondant aux parametres recus

  res.send(match); // On renvoit le match
});

app.get("/foot/", (req, res) => {
  const rounds = foot.rounds; // On va chercher dans l'objet le matchs correspondant aux parametres recus

  res.send(rounds);
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable"); // on dit que la page cherchee n'existe pas
});

// Remarquez que le `app.listen` doit se trouver après les déclarations des routes
app.listen(3000, () => {
  console.log("Server has started");
});
