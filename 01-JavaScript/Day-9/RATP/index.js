const axios = require("axios");
var clc = require("cli-color");
const onReponse = response => {
  const data = response.data.result;
  const keys = Object.keys(data);
  const obj = {
    normal: clc.black.bgGreen("OK"),
    critical: clc.bgRed("O"),
    normal_trav: clc.black.bgYellow("^^")
  };
  for (let i = 0; i < keys.length; i++) {
    const transports = data[keys[i]];
    console.log(clc.red("+") + "-".padEnd(150, "-") + clc.red("+"));
    console.log(keys[i].padEnd(8, " ") + " | Etat | Message");
    for (let j = 0; j < transports.length; j++) {
      console.log(
        transports[j].line +
          " | " +
          obj[transports[j].slug] +
          " | " +
          transports[j].message
      );
    }
  }
};
axios.get("https://pastebin.com/raw/iuFPyp4m").then(onReponse);
