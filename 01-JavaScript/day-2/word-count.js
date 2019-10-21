const wordCount = str => {
  let output = str.split(" ");
  console.log(output);
  return output.length;
};

let count = wordCount("Hello World");

console.log(count);

count = wordCount("one 22 three");

console.log(count);
