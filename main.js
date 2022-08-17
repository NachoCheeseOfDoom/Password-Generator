let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
  "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
  "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function generatePassword() {
  clearPassword();
  for (let i = 0; i < 15; i++) {
    let charactersRandom1 = Math.floor(Math.random() * characters.length);
    let charactersRandom2 = Math.floor(Math.random() * characters.length);
    //password1.innerHTML = characters.push(charactersRandom1);
    password1.innerHTML += characters[charactersRandom1];
    password2.innerHTML += characters[charactersRandom2];
  }
}

function clearPassword() {
  password1.innerHTML = ""
  password2.innerHTML = ""
}