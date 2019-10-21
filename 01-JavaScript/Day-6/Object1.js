let panda = {
  name: "Yan Zi",
  species: "Panda geant",
  gender: "Male",
  weight: 110,
  zoo: "Beauval",
  birth: {
    date: "2008-09-06",
    place: "Chengdu, Chine"
  },
  photos: [
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_photo_identite.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_001.jpg",
    "https://s3.eu-central-1.amazonaws.com/zooparc/assets/pandas/panda_yuan_zi_400x400_002.jpg"
  ]
};

panda.age = 11; // Ajouter dans l'objet panda un champ age qui sera egal a 11.
console.log(panda);
