let person = {
  name: "Alex",
  age: 25,
  city: "Paris"
};
// Creer la fonction ici
addFieldToObject = (obj, clef, value) => {
  obj[clef] = value;
};
//
addFieldToObject(person, "date de naissance", 160594);
console.log(person);
// Doit afficher
// { name: 'Alex',
//  age: 25,
//  city: 'Paris',
//  'date de naissance': 160594 }
