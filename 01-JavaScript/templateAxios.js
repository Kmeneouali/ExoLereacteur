const axios = require("axios");
const api = "";

const onResponse = response => {};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get(api)
  .then(onResponse)
  .catch(onError);
