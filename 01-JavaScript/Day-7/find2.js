/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (collection, value).
  Arguments :
  1) The collection to inspect.
  
  Returns :
  The matched element, else undefined.
*/
// Début de votre code
const find = (arrayObjet, obj) => {
  let result = {
    firstName: "",
    lastName: "",
    gender: ""
  };
  for (let i = 0; i < arrayObjet.length; i++) {
    if (
      arrayObjet[i].lastName === obj.lastName &&
      arrayObjet[i].gender === obj.gender
    ) {
      result.firstName = arrayObjet[i].firstName;
      result.lastName = arrayObjet[i].lastName;
      result.gender = arrayObjet[i].gender;
    }
  }
  return result;
};
// Fin de votre code
const users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];
console.log(find(users, { lastName: "Doe", gender: "male" })); // Doit afficher `{ firstName: "John", lastName: "Doe", age: 28, gender: "male" }`
