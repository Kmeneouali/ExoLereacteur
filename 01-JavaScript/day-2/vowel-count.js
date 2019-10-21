const vowelCount = str => {
  let count = 0;
  console.log(str);
  // voyelles (a, e, i, o, u, y);
  for (let i = 0; i <= str.length; i++) {
    switch (str.charAt(i)) {
      case "a":
        count += 1;
      case "e":
        count += 1;
        break;
      case "i":
        count += 1;
        break;
      case "o":
        count += 1;
        break;
      case "u":
        count += 1;
        break;
      case "y":
        count += 1;
        break;
    }
  }
  console.log(count);
};

const vowelCount2 = str => {
  str = str.toLowerCase();
  const vowelsTab = ["a", "e", "i", "o", "u", "y"];
  let count = 0;

  // voyelles (a, e, i, o, u, y);
  for (let i = 0; i <= str.length; i++) {
    if (vowelsTab.indexOf(str.charAt(i))) {
      count += 1;
    }
  }
  return count;
};

vowelCount("hello");
console.log(vowelCount2("hello"));
