const generateString = num => {
  let str = "";

  // Début de votre code
  if (num > 1) {
    num -= 1;
    str += "-".repeat(num);
  }
  if (num > 0) {
    str += "o";
  }
  // Fin de votre code

  return str;
};

console.log(generateString(0));
console.log(generateString(1)); // Doit afficher `o`
console.log(generateString(2)); // Doit afficher `-o`
console.log(generateString(4)); // Doit afficher `---o`
console.log(generateString(19)); // Doit afficher `------------------o`
