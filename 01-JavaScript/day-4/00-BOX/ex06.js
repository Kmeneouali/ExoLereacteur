/*
  L'objectif de cet exercice est d'afficher les 3 lignes de 5 caractères suivantes :
  -----
  -----
  -----
*/

const height = 3;
const width = 5;

for (let i = 0; i < height /* Quelle variable ici ? */; i++) {
  let line = "";
  for (let j = 0; j < width /* Quelle variable ici ? */; j++) {
    /* Votre code ici */
    line += "-";
  }
  console.log(line);
}
