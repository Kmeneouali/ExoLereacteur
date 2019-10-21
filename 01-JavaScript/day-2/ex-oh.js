const exOh = str => {
  let countX = 0;
  let countO = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) === "x") {
      countX += 1;
    }
    if (str.charAt(i) === "o") {
      countO += 1;
    }
  }
  return countX === countO;
};
let result = exOh("xxooo");

console.log(result);
