const user = {
  name: "Farid"
};

if (user.hasOwnProperty("age") /* Écrivez la bonne condition ici */) {
  console.log(user.age);
} else {
  console.log("L'age n'a pas été défini");
}
