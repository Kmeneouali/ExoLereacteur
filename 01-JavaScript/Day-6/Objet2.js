let panda = {
  nom: "Yan Zi",
  espèce: "Panda Geant",
  sexe: "homme",
  poids: 110,
  zoo: "Beauval",
  naissance: {
    date: "2008-09-06",
    place: "Chengdu, Chine"
  },
  photos: [
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_photo_identite.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_001.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_002.jpg"
  ]
};
// Ajouter dans l'objet panda un champ age qui sera egal a 11 et color qui sera egal a white de 2 façon differentes.
// codez ici
panda.age = 11;
panda["color"] = "white";
console.log(panda);
//
