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
  // ma methode shift permet de retirer le premier element d'un tableau et renvoier cette element cette methode change la longueur du tableau
  const firstElem = array.shift();
  //const firstElem = array[0]);
  return firstElem;
};

// Fin de votre code
console.log(head([2, 3, 4])); // Doit afficher `2`
