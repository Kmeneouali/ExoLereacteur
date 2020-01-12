const axios = require("axios");
var clc = require("cli-color");
const apiId = "8deb24bc45e41ba38fd32fcbbd450e0d";
const ville = process.argv[2];
const route = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiId}`;

const onResponse = response => {
  const meteo = response.data;
  const pip = clc.red("|");
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));
  console.log(pip + (" Pays : " + meteo.sys.country).padEnd(30, " ") + pip);
  console.log(pip + (" Ville : " + meteo.name).padEnd(30, " ") + pip);
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));
  console.log(
    pip +
      (" Description : " + meteo.weather[0].description).padEnd(30, " ") +
      pip
  );
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));
  console.log(
    pip + (" Temperature : " + meteo.main.temp).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Temperature Max : " + meteo.main.temp_max).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Temperature Min : " + meteo.main.temp_min).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Humidite : " + meteo.main.humidity).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Pression : " + meteo.main.pressure).padEnd(30, " ") + pip
  );
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));
  console.log(
    pip + (" Vitesse du vent : " + meteo.wind.speed).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Orientaton du vent : " + meteo.wind.deg).padEnd(30, " ") + pip
  );
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));
  console.log(
    pip + (" Leve du Soleil : " + meteo.sys.sunrise).padEnd(30, " ") + pip
  );
  console.log(
    pip + (" Couche du Soleil : " + meteo.sys.sunset).padEnd(30, " ") + pip
  );
  console.log(clc.red("+") + "-".padEnd(30, "-") + clc.red("+"));

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
