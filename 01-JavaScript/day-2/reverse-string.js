const reverseString = input => {
  let output = "";
  console.log("Input : " + input.length);
  for (let i = input.length - 1; i >= 0; i--) {
    output = output + input.charAt(i);
  }
  return output;
};
console.log(reverseString("LeReacteur"));
