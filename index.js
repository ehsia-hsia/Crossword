("use strict");

//VARIABLES & Element Selectors
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

let revealButton = document.getElementById("revealAll");

//General Even Listeners
clearButton.addEventListener("click", clearAll);
revealButton.addEventListener("click", revealAll);

//Letter and Word
let letterKey = [
  [A1_L1, "s"],
  [A1_L2, "c"],
  [A1_L3, "a"],
  [A1_L4, "m"],
  ["scam", listItem[0], checkIcon[0]],
  [A2_L1, "t"],
  [A2_L2, "o"],
  [A2_L3, "n"],
  [A2_L4, "e"],
  ["tone", listItem[1], checkIcon[1]],
  [A3_L1, "a"],
  [A3_L2, "r"],
  [A3_L3, "t"],
  [A3_L4, "s"],
  ["arts", listItem[2], checkIcon[2]],
  [A4_L1, "b"],
  [A4_L2, "e"],
  [A4_L3, "e"],
  [A4_L4, "s"],
  ["bees"],
];

//LETTER Check

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
        } else {
          incorrectColorChange(letterKey[j][0]);
        } //end letter check
      } //end input id check
    } //loop2
    console.log(congratsCounter);
    congratsCounterStyles();
  } //test function
} //end input loop

//Word Check
let scaamItems = letterKey.slice(0, 5);
let toneItems = letterKey.slice(5, 10);
let artsItems = letterKey.slice(10, 15);
let beesItems = letterKey.slice(15, 20);
//Works for one word
//Word checker notes:

let sliceFunction = function () {
  let scam = [];
  for (let i = 0; i < scaamItems.length; i++) {
    if (scaamItems[i][0].value == scaamItems[i][1]) {
      scam.push(scaamItems[i][1]);
    }
  }
  if (scam.join("") == scaamItems[4][0]) {
    document.body.style.backgroundColor = "pink";
    listChange(scaamItems[4][1]);
    removeIcon(scaamItems[4][2]);
  }

  let tone = [];
  for (let i = 0; i < toneItems.length; i++) {
    if (toneItems[i][0].value == toneItems[i][1]) {
      tone.push(toneItems[i][1]);
    }
  }
  if (tone.join("") == toneItems[4][0]) {
    document.body.style.backgroundColor = "pink";
    listChange(toneItems[4][1]);
    removeIcon(toneItems[4][2]);
  }
  return scam.join(""), tone.join("");
};

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", sliceFunction);
}
///---------------------------------

function removeIcon(icon) {
  icon.classList.remove("hideIcon");
}
function listChange(li) {
  li.classList.add("cluelistCorrect");
}

//---------------Game states--------------------//
//Color Changes and progress check
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

//Modal on Complete
const closeModal = function () {
  overlay.classList.add("hidden");
  congratsCounter = 0;
};

const openModal = function () {
  overlay.classList.remove("hidden");
};

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
//--------------Cursor Behavior----------------//
//Cursor to next and backspace
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
          nextTarg = nextTarg.firstChild;
          nextTarg.focus();
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

//-------BUTTONS------//
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
    checkIcon[j].classList.add("hideIcon");
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
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", clueHighlight);
  function clueHighlight() {
    if (listItem[i] == listItem[0]) {
      input[0].style.borderColor = "pink";
      input[1].style.borderColor = "pink";
      input[2].style.borderColor = "pink";
      input[3].style.borderColor = "pink";
    } else {
      input[0].style.borderColor = "white";
      input[1].style.borderColor = "white";
      input[2].style.borderColor = "white";
      input[3].style.borderColor = "white";
    }
  }
}
