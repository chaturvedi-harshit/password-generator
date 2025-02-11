"use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePasswordBtn = document.getElementById("generate-password-btn");
const passwordOneField = document.getElementById("password-1");
const passwordTwoField = document.getElementById("password-2");

generatePasswordBtn.addEventListener("click", renderPasswords);

function generatePassword(length) {
  let passwordOne = "";
  let passwordTwo = "";
  for (let i = 0; i < length; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)];
    passwordTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  return [passwordOne, passwordTwo];
  //   document.querySelector(".passwords").style.display = "flex";
  //   passwordOneField.textContent = passwordOne;
  //   passwordTwoField.textContent = passwordTwo;
}

function renderPasswords() {
  const passwords = generatePassword(15);
  document.querySelector(".passwords").style.display = "flex";
  passwordOneField.textContent = passwords[0];
  passwordTwoField.textContent = passwords[1];
}
