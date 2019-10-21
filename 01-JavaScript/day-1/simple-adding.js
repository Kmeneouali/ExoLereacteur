console.log("=====================================");
console.log("===========Avec Function =============");
console.log("=====================================");
const simpleAdding = num => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
};

console.log(simpleAdding(4));
console.log(simpleAdding(12));
console.log(simpleAdding(140));

console.log("=====================================");
console.log("===========Sans Function =============");
console.log("=====================================");

let num = 140;
let result = 0;

for (let i = 0; i <= num; i++) {
  result = result + i;
}
console.log(result);
