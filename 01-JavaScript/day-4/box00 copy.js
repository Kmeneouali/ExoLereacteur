const width = process.argv[2];
const height = process.argv[3];

const createLineFirstAndLast = num => {
  let ret = "o";
  if (num === 1) return ret;
  num -= 1;

  if (num > 1) {
    num -= 1;
    ret += "-".repeat(num);
  }
  ret += "o";
  return ret;
};

const createLineMiddle = num => {
  let ret = "|";
  if (num === 1) return ret;
  num -= 1;

  if (num > 1) {
    num -= 1;
    ret += " ".repeat(num);
  }
  ret += "|";
  return ret;
};
if (height === 1) {
  console.log(createLineFirstAndLast(width));
} else {
  console.log(createLineFirstAndLast(width));
  for (let i = 0; i < height - 2; i++) {
    console.log(createLineMiddle(width));
  }
  console.log(createLineFirstAndLast(width));
}
