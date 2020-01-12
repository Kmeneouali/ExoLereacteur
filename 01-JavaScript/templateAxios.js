const axios = require("axios");
const api = "";

const onResponse = response => {};

const onError = error => {
  console.log(error.response.status);
};

printObject = obj => {
  const keys = Object.keys(obj);
  for (let key in obj) {
    console.log(key + " => " + obj[key]);
  }
};

addFieldToObject = (obj, clef, value) => {
  obj[clef] = value;
};

axios
  .get(api)
  .then(onResponse)
  .catch(onError);
