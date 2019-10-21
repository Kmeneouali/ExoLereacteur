/*
  Description :
  Converts the first character of string to lower case.
  Arguments :
  1) The string to convert.
  Returns :
  The converted string.
*/
// Début de votre code

const lowerFirst = str => {
  /* let tab = str.split("");
  let firstLettre = tab[0].toLowerCase();
  tab.shift(0);
  tab.unshift(firstLettre);

  return tab.join(""); */
  return;
};

// Fin de votre code
console.log(lowerFirst("Fred")); // Doit afficher `fred`
console.log(lowerFirst("FRED")); // Doit afficher `fRED`
