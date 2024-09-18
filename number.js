// Ex
function cryptage(message, cle) {
  let resultat = "";
  for (let i = 0; i < message.length; i++) {
    resultat += String.fromCharCode(message.charCodeAt(i) ^ cle);
  }
  return resultat;
}
