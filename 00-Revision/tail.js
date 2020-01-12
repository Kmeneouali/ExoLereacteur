var _ = require("lodash");

/*
  Description :
  Gets all but the first element of array.
  Arguments :
  1) The array to query.
  Returns :
  The slice of array.
*/
// Début de votre code
//***************************************************************************************************** */
//La méthode slice() renvoie un tableau, contenant une copie d'une portion du tableau d'origine.
// La portion est définie par un indice de début et un indice de fin (exclus).
// Le tableau original ne sera pas modifié.
//***************************************************************************************************** */
const tail_0 = array => {
  const tab = array.slice(1);
  return tab;
};

//***************************************************************************************************** */
//  La méthode ## shift() ## permet de retirer le premier élément d'un tableau et de renvoyer cet élément.
// Cette méthode modifie la longueur du tableau.
const tail_1 = array => {
  const firtElm = array.shift();
  return array;
};

//***************************************************************************************************** */

// Fin de votre code
console.log(tail_0([1, 2, 3])); // Doit afficher `[2, 3]`
console.log(tail_1([1, 2, 3])); // Doit afficher `[2, 3]`
console.log(_.tail([1, 2, 3])); // Doit afficher `[2, 3]`
