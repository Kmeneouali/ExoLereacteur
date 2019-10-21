/*
  Description :
  Creates an array excluding all given values.
  Arguments :
  1) The array to inspect.
  2) The values to exclude.
  Returns :
  The new array of filtered values.
*/
// Début de votre code
const without = (array1, array2) => {
  let tab = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      tab.push(array1[i]);
    }
  }
  return tab;
};

const without2 = (array1, array2) => {
  let res = [];
  res = array1.filter(word => array2.indexOf(word) === -1);

  return res;
};

// Fin de votre code

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
console.log(without2([2, 1, 2, 3], [1, 2]));
