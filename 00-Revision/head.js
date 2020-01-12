var _ = require("lodash");
/*
  Description :
  Gets the first element of array.
  Arguments :
  1) The array to query.
  Returns :
  The first element of array.
*/
// Début de votre code
//***************************************************************************************************** */
const head_0 = array => {
  const firtElm = array[0];
  return firtElm;
};
//***************************************************************************************************** */
//  La méthode ## shift() ## permet de retirer le premier élément d'un tableau et de renvoyer cet élément.
// Cette méthode modifie la longueur du tableau.
const head_1 = array => {
  const firtElm = array.shift();
  return firtElm;
};

//***************************************************************************************************** */
//La méthode ## slice() ##  renvoie un tableau, contenant une copie d'une portion du tableau d'origine.
//La portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
const head_2 = array => {
  const firtElm = array.slice(0, 1).join("");
  return firtElm;
};

//***************************************************************************************************** */

// Fin de votre code
console.log(head_0([2, 3, 4])); // Doit afficher `2`
console.log(head_1([2, 3, 4])); // Doit afficher `2`
console.log(head_2([2, 3, 4])); // Doit afficher `2`
console.log(_.head([2, 3, 4])); // Doit afficher `2`
