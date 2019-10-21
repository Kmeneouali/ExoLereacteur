const axios = require("axios");

const apiKey = "c7678f53";
const movies = ["2001", "Interstellar", "Mad Max", "The Mask", "inception"];

const pick = (obj, tab) => {};

const onResponse = response => {
  let movie = response.data; // pick(response,["","","","",""]);
  console.log("Name : " + movie.Title);
  console.log("Year : " + movie.Year);
  console.log("Genre : " + movie.Genre);
  console.log("Actors : " + movie.Actors);
  console.log("-----------------");
};

const onError = error => {
  console.log(error.response.status);
};

for (let i = 0; i < movies.length; i++) {
  axios
    .get(`http://www.omdbapi.com/?t=${movies[i]}&apikey=${apiKey}`)
    .then(onResponse)
    .catch(onError); // Affichera d'eventuelles erreurs, notamment en cas de problème de connexion Internet.
}
