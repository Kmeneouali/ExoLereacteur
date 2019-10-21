const TableMult = arg => {
  let msgResult = "";
  if (arg.length !== 3) {
    msgResult = "error";
  }

  let value = Number(arg[2]);
  console.log(value);
  if (Number.isInteger(value) === false || value < 0) {
    msgResult = "error";
  }

  for (let i = 1; i <= value; i++) {
    console.log(`${i} "*" ${value}  = ${i * value}`);
  }
  return msgResult;
};

let result = TableMult(process.argv);
console.log(result);
