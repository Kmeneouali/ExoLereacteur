/*
  Description :
  Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with one argument: value.
  Arguments :
  1) The collection to inspect.
  2) The function invoked per iteration.
  Returns :
  The matched element, else undefined.
*/
// Début de votre code
const find = (array, func) => {
  let flag;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    flag = func(elem);
    if (flag) {
      return elem;
    }
  }
  return null;
};
// Fin de votre code
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true }
];
console.log(
  find(users, value => {
    if (value.age < 40) {
      return true;
    } else {
      return false;
    }
  })
);
// Doit afficher `{ user: 'barney', age: 36, active: true }`
console.log(
  find(users, value => {
    if (value.age > 50) {
      return true;
    } else {
      return false;
    }
  })
);
// Doit afficher `null`
