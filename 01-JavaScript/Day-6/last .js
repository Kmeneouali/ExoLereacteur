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
  // return array[array.length - 1];
  return array.slice(-1)[0];
};
// Fin de votre code

console.log(last([1, 2, 3])); // Doit afficher `3`
