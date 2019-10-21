/*
  Description :
  Deburrs string by converting letters to basic Latin letters.
  Arguments :
  1) The string to deburr.
  
  Returns :
  The deburred string.
*/
// Début de votre code

const deburr = str => {
  return str.normalize("NFD").replace();

  let accents =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  let accentsOut =
    "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split("");
  let strLen = str.length;
  let i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) !== -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join("");
};
// Fin de votre code
console.log(deburr("déjà vu")); // Doit afficher `deja vu`
console.log(deburr("Juan José")); // Doit afficher `Juan Jose`
