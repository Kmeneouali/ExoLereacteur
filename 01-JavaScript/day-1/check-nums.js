const CheckNums = (num1, num2) => {
  if (num2 > num1) {
    console.log("num2 est supérieur à num1");
  } else if (num2 === num1) {
    console.log("num1 et num2 sont équivalents");
  } else if (num2 < num1) {
    console.log("num2 est inferieur à num1");
  }
};
CheckNums(3, 122);
CheckNums(67, 67);
