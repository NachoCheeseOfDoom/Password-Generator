let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

let charactersAndSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c",
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
  "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
  "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwordLength = document.getElementById("password-length");
let clicked = false;

function generatePassword() {
  if (document.getElementById("radio1").checked) {
    whithSymbols();
  }
  else if (document.getElementById("radio2").checked) {
    whithoutSymbols()
  }
}

function whithSymbols() {
  clicked = true
  clearPassword();
  for (let i = 0; i < passwordLength.value; i++) {
    let charactersRandom1 = Math.floor(Math.random() * charactersAndSymbols.length);
    let charactersRandom2 = Math.floor(Math.random() * charactersAndSymbols.length);
    password1.innerHTML += charactersAndSymbols[charactersRandom1];
    password2.innerHTML += charactersAndSymbols[charactersRandom2];
  }
}

function whithoutSymbols() {
  clicked = true
  clearPassword();
  for (let i = 0; i < passwordLength.value; i++) {
    let charactersRandom1 = Math.floor(Math.random() * characters.length);
    let charactersRandom2 = Math.floor(Math.random() * characters.length);
    password1.innerHTML += characters[charactersRandom1];
    password2.innerHTML += characters[charactersRandom2];
  }
}

function clearPassword() {
  password1.innerHTML = " "
  password2.innerHTML = " "
}

function copy1() {
  if (clicked === true) {
    const range = document.createRange();
    range.selectNode(document.getElementById("password1"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied first password: " + range);
  } else {
    alert("Nothing Copied");
  }
}

function copy2() {
  if (clicked === true) {
    const range = document.createRange();
    range.selectNode(document.getElementById("password2"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied second password: " + range);
  } else {
    alert("Nothing Copied");
  }
}
