/*
  Description :
  Gets the first element of array.
  Arguments :
  1) The array to query.
  Returns :
  The first element of array.
*/
// Début de votre code
const head = array => {
  const firstElem = array.shift();
  //const firstElem = array.slice(1);
  return firstElem;
};

// Fin de votre code
console.log(head([2, 3, 4])); // Doit afficher `2`
