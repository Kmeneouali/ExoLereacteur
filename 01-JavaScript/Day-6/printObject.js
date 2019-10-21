const personne = {
  nom: "Alex",
  âge: "25 ans",
  ville: "Paris"
};
// Creer la fonction ici
//

printObject = personne => {
  const keys = Object.keys(personne);
  for (let key in personne) {
    console.log(key + " => " + personne[key]);
  }
};
printObject(personne);
// Doit afficher
// nom => Alex
// age => 25
// city => Paris
