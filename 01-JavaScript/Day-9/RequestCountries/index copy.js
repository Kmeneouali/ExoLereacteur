const axios = require("axios");

const onResponse = response => {
  let resul = "";
  const countries = response.data;
for (let i=0;i<countries.length;i++){
  const country= countries[i];
  let name ="";
 
  if(country.translations !== null && country.translations.fr !==null ){
    name=country.translations.fr;
}else {
  name=country.name;
}

if()

};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get("https://restcountries.eu/rest/v1/all")
  .then(onResponse)
  .catch(onError); // Affichera d'eventuelles erreurs, notamment en cas de problème de connexion Internet.
