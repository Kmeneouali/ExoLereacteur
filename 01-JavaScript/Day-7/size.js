/*
  Description :
  Gets the size of collection by returning its length.
  Arguments :
  1) The collection to inspect.
  Returns :
  The collection size.
*/
// Début de votre code
const size = args => {
  let size;
  if (Array.isArray(args)) {
    size = args.length;
  } else {
    size = Object.keys(args).length;
  }
  return size;
};

// Fin de votre code
console.log(size("pebbles")); // Doit afficher `7`
// Pour l'exemple suivant, vous pourriez avoir besoin de `Array.isArray`
// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
console.log(size([1, 2, 3])); // Doit afficher `3`
// Pour l'exemple suivant, vous pourriez avoir besoin de `Object.keys`
// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
console.log(size({ a: 1, b: 2 })); // Doit afficher `2`
