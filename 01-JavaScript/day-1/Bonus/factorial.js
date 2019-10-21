const factorial = n => {
  if (n === 0) {
    //remember that 0! is defined as 1
    return 1;
  }
  return n * factorial(n - 1); //the recursion
};

const input = 8;
let resultat = factorial(input);
console.log(resultat);
