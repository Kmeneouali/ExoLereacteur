const axios = require("axios");

const amount = Number(process.argv[2]);
const fromRate = process.argv[3];
const toRate = process.argv[4];
console.log("------------------------------------------------");
console.log("******* Convertisseur de devises *******");
console.log("------------------------------------------------");
console.log("Le montant à convertir : " + amount);
console.log("La devise de base      : " + fromRate);
console.log("La devise à obtenir    : " + toRate);
console.log("------------------------------------------------");

const accessKey = "961a21affd4e4b5a5de6f83c53157e9d";

const onResponse = response => {
  const rates = response.data.rates;
  const fromTaux = rates[fromRate];
  const toTaux = rates[toRate];
  const total = (amount * toTaux) / fromTaux;

  console.log(
    `${amount} ${fromRate} > ${total} ${toRate}  (taux de change appliqué : ${total}).`
  );
  console.log("------------------------------------------------");
};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get(`http://data.fixer.io/api/latest?access_key=${accessKey}`)
  .then(onResponse)
  .catch(onError);
