/*
  Description :
  Invokes the iteratee n times, returning an array of the results of each invocation.
  Arguments :
  1) The number of times to invoke iteratee.
  2) The function invoked per iteration.
  
  Returns :
  The array of results.
*/
// Début de votre code
const times = (nbr, func) => {
  let tab = [];
  for (let i = 0; i < nbr; i++) {
    tab.push(func());
  }
  return tab;
};

// Fin de votre code
function getRandomInteger() {
  return Math.round(Math.random() * 100);
}
console.log(times(5, getRandomInteger)); // Doit afficher 5 valeurs aléatoires `[64, 70, 29, 10, 23]`
