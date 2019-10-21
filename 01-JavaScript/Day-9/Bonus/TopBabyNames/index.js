const axios = require("axios");
var _ = require("lodash");
const api =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&rows=10000&sort=nombre&refine.annee=2018";

const onResponse = response => {
  const records = response.data.records;
  let array = [];
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    const objet = {};
    objet.prenom = record.fields.prenoms;
    objet.nombre = record.fields.nombre_total_cumule;
    array.push(objet);
  }

  let array2 = _.sortBy(array, ["nombre"]);
  array2 = array2.splice(array2.length - 10, array2.length);

  //let array3 = _.sortBy(array2, ["prenom"]);

  console.log(array2);
};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get(api)
  .then(onResponse)
  .catch(onError);
