const axios = require("axios");
axios
  .get("https://facebook.github.io/react-native/movies.json")
  .then(response => {
    console.log(response.data); // Affichera la réponse du serveur
  })
  .catch(error => {
    console.log(error); // Affichera d'eventuelles erreurs, notamment en cas de problème de connexion Internet.
  });
