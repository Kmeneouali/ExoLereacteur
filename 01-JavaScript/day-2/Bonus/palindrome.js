const palindrome = str => {
  let str1;
  let str2;
  let tab1 = str.split("");
  console.log("Tableau 1 : " + tab1);
  // let tab2 = tab1.reverse();
  console.log("Tableau 2 : " + tab1.reverse());
  str1 = tab1.join("");
  console.log("str1 : " + str1.toUpperCase().replace(/\s/g, ""));
  str2 = tab1.reverse().join("");
  console.log("str2 : " + str2.toUpperCase().replace(/\s/g, ""));

  return (
    str1.toUpperCase().replace(/\s/g, "") ===
    str2.toUpperCase().replace(/\s/g, "")
  );
};

let result = palindrome("Un bon snob nu");
console.log("result " + result);
/* result = palindrome("12345");
console.log("result " + result); */
