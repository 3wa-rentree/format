function cryptage(message, cle) {
  let resultat = "";
  for (let i = 0; i < message.length; i++) {
    resultat += String.fromCharCode(message.charCodeAt(i) ^ cle);
  }
  return resultat;
}

function decryptage(messageChiffre, cle) {
  let resultat = "";
  for (let i = 0; i < messageChiffre.length; i++) {
    resultat += String.fromCharCode(messageChiffre.charCodeAt(i) ^ cle);
  }
  return resultat;
}

document.getElementById("line").addEventListener("input", (e) => {
  //   TODO : adapter à la ligne, ici, 2
  if (cryptage(e.target.value.toString(), 15) == "=") {
    document.getElementById("message").textContent = decryptage(
      "I`%qwjlvl`h`%fmlccw`%`vq%flkt)%c`ilflqdqljkv",
      5
    );
    document.querySelector("a").href = "https://www.google.com/";
  }
});
