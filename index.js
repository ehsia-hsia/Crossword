("use strict");

//VARIABLES
let A1_L1 = document.getElementById("across1L1Input");
let A1_L2 = document.getElementById("across1L2Input");
let A1_L3 = document.getElementById("across1L3Input");
let A1_L4 = document.getElementById("across1L4Input");

let A2_L1 = document.getElementById("across2L1Input");
let A2_L2 = document.getElementById("across2L2Input");
let A2_L3 = document.getElementById("across2L3Input");
let A2_L4 = document.getElementById("across2L4Input");

let A3_L1 = document.getElementById("across3L1Input");
let A3_L2 = document.getElementById("across3L2Input");
let A3_L3 = document.getElementById("across3L3Input");
let A3_L4 = document.getElementById("across3L4Input");

let A4_L1 = document.getElementById("across4L1Input");
let A4_L2 = document.getElementById("across4L2Input");
let A4_L3 = document.getElementById("across4L3Input");
let A4_L4 = document.getElementById("across4L4Input");

let status = document.querySelector(".status");
let listItem = document.getElementsByTagName("li");
let list = document.getElementsByTagName("ol");
let checkIcon = document.querySelectorAll(".checkIcon");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

let input = document.getElementsByTagName("input");

let clearButton = document.getElementById("clearAll");
clearButton.addEventListener("click", clearAll);

let revealButton = document.getElementById("revealAll");
revealButton.addEventListener("click", revealAll);

//Letter and Word  KEY
let letterKey = [
  [A1_L1, "s"],
  [A1_L2, "c"],
  [A1_L3, "a"],
  [A1_L4, "m"],
  [A2_L1, "t"],
  [A2_L2, "o"],
  [A2_L3, "n"],
  [A2_L4, "e"],
  [A3_L1, "a"],
  [A3_L2, "r"],
  [A3_L3, "t"],
  [A3_L4, "s"],
  [A4_L1, "b"],
  [A4_L2, "e"],
  [A4_L3, "e"],
  [A4_L4, "s"],
];

function listChange(li) {
  li.classList.add("cluelistCorrect");
}

//________________COLOR CHANGES and Status Text ________________
function correctColorChange(square) {
  square.classList.add("correctColor");
  square.classList.remove("incorrectColor");
}

function incorrectColorChange(square) {
  square.classList.add("incorrectColor");
  square.addEventListener("focus", clearletter);
  function clearletter() {
    square.value = "";
  }
}
let congratsCounter = 0;
function congratsCounterStyles() {
  if (congratsCounter >= input.length) {
    status.textContent = "Status: COMPLETE!";
    openModal();
  } else if (congratsCounter >= input.length * 0.6) {
    status.textContent = "Status: Almost complete...";
  } else if (congratsCounter >= input.length * 0.5) {
    status.textContent = "Status: 50% complete...";
  } else if (congratsCounter >= input.length * 0.25) {
    status.textContent = `Status: 25% complete... `;
  } else if (congratsCounter == 0) {
    status.textContent = "Status: ";
  }
}
//_________CURSOR TO NEXT___________
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", cursorMove);
  function cursorMove(e) {
    let nextTarg = input[i];
    let maxLength = nextTarg.attributes["maxlength"].value;
    let myLength = nextTarg.value.length;
    if (myLength >= 1) {
      let next = nextTarg;
      while ((nextTarg = nextTarg.nextElementSibling)) {
        if (nextTarg == null) break;
        if (nextTarg.tagName.toLowerCase() == "input") {
          nextTarg.focus();
          break;
        }
        if (nextTarg.nextElementSibling == null) {
          break;
        }
      }
    }

    if (e.key == "Backspace") {
      while ((nextTarg = nextTarg.previousElementSibling)) {
        if (nextTarg == null) break;
        if (nextTarg.tagName.toLowerCase() == "input") {
          nextTarg.focus();
          break;
        }
        if (nextTarg.previousElementSibling == null) {
          break;
        }
      }
    }
  }
}

//_______________LETTER CHECKER____________________

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", letterChecker);
  function letterChecker() {
    for (let j = 0; j < letterKey.length; j++) {
      // iterate through array
      if (input[i] == letterKey[j][0]) {
        // match input selected to nested array 0, which holds id of inputs
        if (input[i].value == letterKey[j][1]) {
          //if value of input match nested array 1, which holds letter value
          correctColorChange(input[i]);
          congratsCounter++;
          wordTest();
        } else {
          incorrectColorChange(input[i]);
        } //end letter check
      } //end input id check
    } //loop2
    console.log(congratsCounter);
    congratsCounterStyles();
  } //test function
} //end input loop

//___________WORD CHECK_________________
function wordTest() {
  let scam =
    input[0].value.toString() +
    input[1].value.toString() +
    input[2].value.toString() +
    input[3].value.toString();
  if (scam == "scam") {
    listChange(listItem[0]);
    removeIcon(checkIcon[0]);
  }
  let tone =
    input[4].value.toString() +
    input[5].value.toString() +
    input[6].value.toString() +
    input[7].value.toString();
  if (tone == "tone") {
    listChange(listItem[1]);
    removeIcon(checkIcon[1]);
  }
  let arts =
    input[8].value.toString() +
    input[9].value.toString() +
    input[10].value.toString() +
    input[11].value.toString();
  if (arts == "arts") {
    listChange(listItem[2]);
    removeIcon(checkIcon[2]);
  }
  let bees =
    input[12].value.toString() +
    input[13].value.toString() +
    input[14].value.toString() +
    input[15].value.toString();
  if (bees == "bees") {
    listChange(listItem[3]);
    removeIcon(checkIcon[3]);
  }
  let stab =
    input[0].value.toString() +
    input[4].value.toString() +
    input[8].value.toString() +
    input[12].value.toString();
  if (stab == "stab") {
    listChange(listItem[4]);
    removeIcon(checkIcon[4]);
  }
  let core =
    input[1].value.toString() +
    input[5].value.toString() +
    input[9].value.toString() +
    input[13].value.toString();
  if (core == "core") {
    listChange(listItem[5]);
    removeIcon(checkIcon[5]);
  }
  let ante =
    input[2].value.toString() +
    input[6].value.toString() +
    input[10].value.toString() +
    input[14].value.toString();
  if (ante == "ante") {
    listChange(listItem[6]);
    removeIcon(checkIcon[6]);
  }
  let mess =
    input[3].value.toString() +
    input[7].value.toString() +
    input[11].value.toString() +
    input[15].value.toString();
  if (mess == "mess") {
    listChange(listItem[7]);
    removeIcon(checkIcon[7]);
  }
}

function removeIcon(icon) {
  icon.classList.remove("hideIcon");
}
//______BUTTONS_____________
//Reveal

function revealAll() {
  for (let j = 0; j < letterKey.length; j++) {
    if (letterKey[j][0].value !== letterKey[j][1]) {
      letterKey[j][0].value = letterKey[j][1];
      letterKey[j][0].classList.add("blackLetter");
    }
  }
}

//Clear

function clearAll() {
  congratsCounter = 0;
  status.textContent = "Status: ";
  let input = document.getElementsByTagName("input");
  for (let j = 0; j < listItem.length; j++) {
    listItem[j].classList.remove("cluelistCorrect");
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i].type == "text") {
      input[i].value = "";
      input[i].classList.remove("correctColor");
      input[i].classList.remove("incorrectColor");
      input[i].classList.remove("blackLetter");
    }
  }
}
// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].addEventListener("click", clueHighlight);
//   function clueHighlight() {
//     if (listItem[i] == listItem[0]) {
//       input[0].style.borderColor = "pink";
//       input[1].style.borderColor = "pink";
//       input[2].style.borderColor = "pink";
//       input[3].style.borderColor = "pink";
//     }
//   }
// }
//_____MODAL ON COMPLETE______________
const closeModal = function () {
  overlay.classList.add("hidden");
  congratsCounter = 0;
};

const openModal = function () {
  overlay.classList.remove("hidden");
};

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  ///creates object
  console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});
