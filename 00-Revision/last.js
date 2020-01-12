var _ = require("lodash");
/*
  Description :
  Gets the last element of array.
  Arguments :
  1) The array to query.
  Returns
  The last element of array.
*/
// Début de votre code

const last = array => {
  const lastelem = array[array.length - 1];
  return lastelem;
};

// Fin de votre code
console.log(last([1, 2, 3])); // Doit afficher `3`

console.log(_.last([1, 2, 3])); // Doit afficher `3`
