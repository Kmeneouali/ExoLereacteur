const generateString = num => {
  let str = "";

  //========================================
  /* Solution 1 */

  //========================================

  /*  str = "-".repeat(num); */

  //========================================
  /* Solution 2 */

  //========================================

  for (let i = 1; i <= num; i++) {
    str += "-";
  }

  return str;
};

console.log(generateString(1)); // Doit afficher `-`
console.log(generateString(2)); // Doit afficher `--`
console.log(generateString(4)); // Doit afficher `----`
console.log(generateString(19)); // Doit afficher `-------------------`
