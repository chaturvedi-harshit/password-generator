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

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
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
const passwordLengthInput = document.querySelector("#password-length-input");
const symbolToggle = document.querySelector("#symbol-checkbox");
const numberToggle = document.querySelector("#number-checkbox");

generatePasswordBtn.addEventListener("click", renderPasswords);

function generatePassword() {
  let passwordLength = Number(passwordLengthInput.value);
  console.log("length " + passwordLength);
  let passwordOne = "";
  let passwordTwo = "";
  if (passwordLength <= 7 || passwordLength > 50) {
    return;
  }
  if (passwordLength > 0 && passwordLength <= 50) {
    for (let i = 0; i < passwordLength; i++) {
      if (symbolToggle.checked === true && numberToggle.checked === true) {
        let randomCharOne =
          characters[Math.floor(Math.random() * characters.length)];
        let randomCharTwo =
          characters[Math.floor(Math.random() * characters.length)];
        passwordOne += randomCharOne;
        passwordTwo += randomCharTwo;
      }

      if (symbolToggle.checked === true && numberToggle.checked === false) {
        let randomCharOne, randomCharTwo;

        do {
          randomCharOne =
            characters[Math.floor(Math.random() * characters.length)];
        } while (numbers.includes(randomCharOne));

        do {
          randomCharTwo =
            characters[Math.floor(Math.random() * characters.length)];
        } while (numbers.includes(randomCharTwo));
        passwordOne += randomCharOne;
        passwordTwo += randomCharTwo;
      }

      if (symbolToggle.checked === false && numberToggle.checked === true) {
        let randomCharOne, randomCharTwo;

        do {
          randomCharOne =
            characters[Math.floor(Math.random() * characters.length)];
        } while (symbols.includes(randomCharOne));

        do {
          randomCharTwo =
            characters[Math.floor(Math.random() * characters.length)];
        } while (symbols.includes(randomCharTwo));

        passwordOne += randomCharOne;
        passwordTwo += randomCharTwo;
      }

      if (symbolToggle.checked === false && numberToggle.checked === false) {
        return;
      }
    }
  }
  return [passwordOne, passwordTwo];
}

//   document.querySelector(".passwords").style.display = "flex";
//   passwordOneField.textContent = passwordOne;
//   passwordTwoField.textContent = passwordTwo;

function renderPasswords() {
  const passwords = generatePassword();
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "none";
  // console.log(passwords);
  if (passwords === undefined) {
    document.querySelector(".passwords").style.display = "none";
    errorMessage.style.display = "block";
    errorMessage.textContent =
      "Check your inputs. Password length should be between 8-50 and one of the checkboxes should be toggled";
  } else {
    document.querySelector(".passwords").style.display = "flex";
    passwordOneField.textContent = passwords[0];
    passwordTwoField.textContent = passwords[1];
  }
}

passwordOneField.addEventListener("click", function () {
  // document.querySelector(".copied-text").style.display = "none";

  let range = document.createRange();
  let selection = window.getSelection();

  selection.removeAllRanges();
  range.selectNodeContents(this);
  selection.addRange(range);

  navigator.clipboard.writeText(passwordOneField.textContent);
  document.querySelector(".copied-text").style.display = "block";
  document.querySelector(
    ".copied-text"
  ).textContent = `Text Copied : ${passwordOneField.textContent}`;
});

passwordTwoField.addEventListener("click", function () {
  // document.querySelector(".copied-text").style.display = "none";

  let range = document.createRange();
  let selection = window.getSelection();

  selection.removeAllRanges();
  range.selectNodeContents(this);
  selection.addRange(range);

  navigator.clipboard.writeText(passwordOneField.textContent);
  document.querySelector(".copied-text").style.display = "block";

  document.querySelector(
    ".copied-text"
  ).textContent = `Text Copied : ${passwordTwoField.textContent}`;
});
