/*
  Description :
  Creates an object composed of the picked object properties.
  Arguments :
  1) The source object.
  2) The property paths to pick.
  Returns :
  The new object.
*/
// Début de votre code

const pick = (source, property) => {
  const tabSource = Object.keys(source);

  for (let i = 0; i < tabSource.length; i++) {
    const key = tabSource[i];
    if (property.indexOf(key) === -1) {
      delete source[key];
    }
  }
  // let newObjet = {};
  /*   for (let i = 0; i < property.length; i++) {
    const key = property[i];
    if (!tabSource.includes(key)) {
      newObjet[key] = source[key];
     
    }
  } return */

  return source;
};

// Fin de votre code
console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Doit afficher { 'a': 1, 'c': 3 }
