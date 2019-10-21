/*
  N'oubliez pas de convertir `num` en Number
  Mot clés Google : `javascript convert string to number`
*/

const generateString = num => {
  let str = "";

  // Début de votre code
  let value = Number(num);
  if (value > 1) {
    value -= 1;
    str += "-".repeat(value);
  }
  if (value > 0) {
    str += "o";
  }
  // Fin de votre code

  return str;
};

/*
- Doit afficher `---o` lorsque nous exécutons le script avec la commande `node chemin_du_fichier 4`
- Doit afficher `----o` lorsque nous exécutons le script avec la commande `node chemin_du_fichier 5`
*/
console.log(generateString(process.argv[2]));
