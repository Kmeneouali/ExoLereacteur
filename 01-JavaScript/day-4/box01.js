const width = process.argv[2];
const height = process.argv[3];
let tab1 = [];
let tab2;

for (let i = 0; i < height; i++) {
  tab2 = [];
  let wiidth2 = width - 2;
  for (let j = 0; j < width - 1; j++) {
    if (j === 0) {
      tab2.push("/");
    }
    if (j === width - 2) {
      tab2.push("\\");
    }
    tab2.push("*");
  }
  tab1.push(tab2);
}
console.log(tab1);
