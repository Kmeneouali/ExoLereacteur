const box00 = arg => {
  let widthValue = Number(arg[2]);
  let heightValue = Number(arg[3]);
  let tabWidth = [];
  let tabHeight = [];

  let msg = "";

  console.log("width  : " + widthValue);
  console.log("height : " + heightValue);
  for (let j = 0; j < heightValue; j++) {
    tabWidth = [];
    if (j === 0 || j === heightValue - 1) {
      for (let i = 0; i < widthValue; i++) {
        if (i === 0 || i === widthValue - 1) {
          tabWidth.push("o");
        } else {
          tabWidth.push("-");
        }
      }
      console.log(tabWidth.join(""));
    } else {
      for (let i = 0; i < widthValue; i++) {
        if (i === 0 || i === widthValue - 1) {
          tabWidth.push("|");
        } else {
          tabWidth.push(" ");
        }
      }
      console.log(tabWidth.join(""));
    }
  }
};
box00(process.argv);
