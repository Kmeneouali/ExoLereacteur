const axios = require("axios");
axios
  .get("https://restcountries.eu/rest/v1/all")
  .then(response => {
    let tab = [];
    tab = response.data;
    let array = [];
    for (let i = 0; i < tab.length; i++) {
      array.push(tab[i].name);
    }
    // Affichera la réponse du serveur
    let lastCountry = array.pop();

    console.log(array.join(",") + " Et " + lastCountry + ".");
  })
  .catch(error => {
    console.log(error); // Affichera d'eventuelles erreurs, notamment en cas de problème de connexion Internet.
  });
