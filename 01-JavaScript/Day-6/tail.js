/*
  Description :
  Gets all but the first element of array.
  Arguments :
  1) The array to query.
  Returns :
  The slice of array.
*/
// Début de votre code

const tail = array => {
  //La méthode slice() renvoie un tableau, contenant une copie d'une portion du tableau d'origine. La portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
  return array.slice(1);
};
// Fin de votre code
console.log(tail([1, 2, 3])); // Doit afficher `[2, 3]`
