const axios = require("axios");

const onResponse = response => {
  const rounds = response.data;
  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];

    const matches = round.matches;
    for (let j = 0; j < matches.length; j++) {
      const match = matches[j];
      console.log("|-------------------------------|");
      console.log("| date : " + match.date + " time : " + match.time);
      console.log("|-------------------------------|");
      console.log(
        "|        " + match.team1.code + "    vs   " + match.team2.code
      );

      console.log("|         " + match.score1 + "      vs   " + match.score2);
      console.log("|-------------------------------|");
      const goals1 = match.goals1;
      const goals2 = match.goals2;
      //console.log(goals1);
      //console.log(goals2);
      if (undefined != goals1 && goals1.length > 0) {
        console.log("| les buteurs de : " + match.team1.name);
        for (let k = 0; k < goals1.length; k++) {
          console.log("|  " + goals1[k].name + " : " + goals1[k].score1);
        }
      }

      if (undefined != goals2 && goals2.length > 0) {
        console.log("|--------------");
        console.log("| les buteurs de : " + match.team2.name);
        for (let k = 0; k < goals2.length; k++) {
          console.log("|  " + goals2[k].name + " : " + goals2[k].score1);
        }
      }
    }
  }
};

const onError = error => {
  console.log(error.response.status);
};

axios
  .get("http://localhost:3000/foot/")
  .then(onResponse)
  .catch(onError);
