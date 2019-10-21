const sentence = process.argv[2];
const words = sentence.split(" ");
const LIMIT = 39;

//parcour tout le words
// on compte le nbr de lettre par mot
// on push le mot dans un nouveau tableau tant que  LIMIT n'est pas atteint
let counter = 0;
let finalArray = [];

//[mot ,mot,mot]
//[[mot ,mot],[mot ,mot]]

let array = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(word);
  counter += word.length;
  console.log(counter);
  if (counter <= LIMIT) {
    array.push(word);
  } else {
    finalArray.push(array);
    array = [];
    counter = 0;
  }
  finalArray.push(array);
}

console.log(finalArray);
