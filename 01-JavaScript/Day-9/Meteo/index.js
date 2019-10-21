const axios = require("axios");
const apiId = "8deb24bc45e41ba38fd32fcbbd450e0d";
const ville = process.argv[2];
const route = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiId}`;

const onResponse = response => {
  const meteo = response.data;
  console.log("+-------------------------+");
  console.log("| Pays : " + meteo.sys.country);
  console.log("| Ville : " + meteo.name);
  console.log("+-------------------------+");
  console.log("| Description : " + meteo.weather[0].description);
  console.log("+-------------------------+");
  console.log("| Temperature : " + meteo.main.temp);
  console.log("| Temperature Max : " + meteo.main.temp_max);
  console.log("| Temperature Min : " + meteo.main.temp_min);
  console.log("| Humidite : " + meteo.main.humidity);
  console.log("| Pression : " + meteo.main.pressure);
  console.log("+-------------------------+");
  console.log("| Vitesse du vent : " + meteo.wind.speed);
  console.log("| Orientaton du vent : " + meteo.wind.deg);
  console.log("+-------------------------+");
  console.log("| Leve du Soleil : " + meteo.sys.sunrise);
  console.log("| Couche du Soleil : " + meteo.sys.sunset);
  console.log("+-------------------------+");

  /*   +-------------------------+
  | Pays : Fr               |
  | Ville : Paris           |
  +-------------------------+
  | Description : clear sky |
  +-------------------------+
  | Temperature : 10°       |
  | Temperature Max : 12°   |
  | Temperature Min : 8°    |
  | Humidite : 92%          |
  | Pression : 1009         |
  +-------------------------+
  | Vitesse du vent : 35km/h|
  | Orientaton du vent : 3° |
  +-------------------------+
  | Leve du Soleil : 7h00   |
  | Couche du Soleil : 21h40|
  +-------------------------+ */
};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get(route)
  .then(onResponse)
  .catch(onError);
