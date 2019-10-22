const express = require("express");
const app = express();
const datefns = require("date-fns");

const booking = [
  { date: "2019-02-01", orchestre: 1161, mezzanine: 824 },
  { date: "2019-02-02", orchestre: 10, mezzanine: 4 },
  { date: "2019-02-03", orchestre: 1159, mezzanine: 824 },
  { date: "2019-02-10", orchestre: 1159, mezzanine: 820 },
  { date: "2019-10-19", orchestre: 1159, mezzanine: 820 },
  { date: "2019-10-20", orchestre: 1159, mezzanine: 820 }
];

// Remarquez que le `app.listen` doit se trouver après les déclarations des routes

app.get("/availabilities", function(req, res) {
  const date = req.query.date;

  const result = find(booking, date);
  if (result !== undefined) {
    res.send(result);
  } else {
    res
      .status(400)
      .send("Cette date n'existe pas OU la date est avant la date du jour ");
  }
});

app.get("/book", function(req, res) {
  const date = req.query.date;
  const category = req.query.category;
  const seats = Number(req.query.seats);

  const result = find(booking, date);
  if (result !== undefined) {
    console.log("categorie demande :" + category);
    console.log("seate demande :" + seats);

    // "category" (orchestre ou mezzanine)
    if (category === "orchestre" || category === "mezzanine") {
      // "seats" (de 1 à 4)
      if (!isNaN(seats) && (seats > 0 && seats <= 4)) {
        const nbrDisponible = result[category];
        if (nbrDisponible >= seats) {
          const nbrRestant = nbrDisponible - seats;
          result[category] = nbrRestant;
          res.send(result);
        } else {
          res
            .status(400)
            .send(
              "Il ne reste pas assez de places pour passer votre commande!"
            );
        }
      } else {
        res.status(400).send("Veuillez choisir un nombre entre 1 et 4!");
      }
    } else {
      res.status(400).send("Cette catégorie n'existe pas");
    }
  } else {
    res
      .status(400)
      .send("Cette date n'existe pas OU la date est avant la date du jour ");
  }
});

const find = (tab, value) => {
  console.log("compareAsc " + datefns.compareAsc(new Date(value), new Date()));
  if (datefns.compareAsc(new Date(value), new Date()) !== -1) {
    // Parcourir le tableau
    for (let i = 0; i < tab.length; i++) {
      // Comparer dynamiquement toutes les clés de obj avec tab[i]
      let isFound = false;

      if (tab[i].date === value) {
        isFound = true;
      }

      if (isFound === true) {
        return tab[i];
      }
    }
    // Si aucun élément n'a été trouvé, alors on retourne undefined
    return undefined;
  } else {
    return undefined;
  }
};

app.listen(3000, () => {
  console.log("Server has started");
});
