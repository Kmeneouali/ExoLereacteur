/*
  Description :
  Fills elements of array with value.
  Arguments :
  1) The array to fill.
  2) The value to fill array with.
  Returns :
  The filled array.
*/
// Début de votre code
const fill = (array, char) => {
  let tab = [];
  let i = 0;
  for (; i < array.length; ) {
    tab.push(char);
    i++;
  }
  return tab;
};

// Fin de votre code
console.log(fill([1, 2, 3, 4], "a")); // Doit afficher `['a', 'a', 'a']`
