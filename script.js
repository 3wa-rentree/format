function mysteryFunction1(message, cle) {
  let resultat = "";for (let i = 0; i < message.length; i++) {
      resultat += String.fromCharCode(message.charCodeAt(i) ^ cle);}return resultat;}
function mysteryFunction2(messageChiffre, cle) {
    let resultat = "";for (let i = 0; i < messageChiffre.length; i++) {resultat += String.fromCharCode(messageChiffre.charCodeAt(i) ^ cle);}return resultat;}
document.getElementById("line").addEventListener("input", (e) => {
    if (mysteryFunction1(e.target.value.toString(), 15) == "=") {
        document.getElementById("message").textContent = mysteryFunction2("I`%qwjlvl`h`%fmlccw`%`vq%flkt)%c`ilflqdqljkv",5);document.querySelector("#repo").innerText = mysteryFunction2("lpptw>++cmplqf*gki+7se)vajpvaa+gkjwkha",4);}});