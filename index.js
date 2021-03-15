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

//General Event Listeners
clearButton.addEventListener("click", clearAll);
revealButton.addEventListener("click", revealAll);

//Letter and Word Key
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

  [A1_L1, "s"],
  [A2_L1, "t"],
  [A3_L1, "a"],
  [A4_L1, "b"],

  [A1_L2, "c"],
  [A2_L2, "o"],
  [A3_L2, "r"],
  [A4_L2, "e"],

  [A1_L3, "a"],
  [A2_L3, "n"],
  [A3_L3, "t"],
  [A4_L3, "e"],

  [A1_L4, "m"],
  [A2_L4, "e"],
  [A3_L4, "s"],
  [A4_L4, "s"],
];

let wordMatchKey = [
  ["scam", listItem[0], checkIcon[0]],
  ["tone", listItem[1], checkIcon[1]],
  ["arts", listItem[2], checkIcon[2]],
  ["bees", listItem[3], checkIcon[3]],
  ["stab", listItem[4], checkIcon[4]],
  ["core", listItem[5], checkIcon[5]],
  ["ante", listItem[6], checkIcon[6]],
  ["mess", listItem[7], checkIcon[7]],
];

let scaamItems = letterKey.slice(0, 4);
let toneItems = letterKey.slice(4, 8);
let artsItems = letterKey.slice(8, 12);
let beesItems = letterKey.slice(12, 16);
let stabItems = letterKey.slice(16, 20);
let coreItems = letterKey.slice(20, 24);
let anteItems = letterKey.slice(24, 28);
let messItems = letterKey.slice(28, 32);

let loopArray = [
  scaamItems,
  toneItems,
  artsItems,
  beesItems,
  stabItems,
  coreItems,
  anteItems,
  messItems,
];
let congratsCounter = 0;

//----Correct Entires ----//

//Letter Check
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", letterChecker);
  function letterChecker() {
    for (let j = 0; j < letterKey.length; j++) {
      if (input[i] == letterKey[j][0]) {
        if (input[i].value == letterKey[j][1]) {
          correctColorChange(input[i]);
          input[i].disabled = true;
        } else {
          incorrectColorChange(letterKey[j][0]);
        }
      }
    }
  }
}

//Word Check

let wordChecker = function () {
  let scam = [];
  let tone = [];
  let arts = [];
  let bees = [];
  let stab = [];
  let core = [];
  let ante = [];
  let mess = [];
  let wordArray = [scam, tone, arts, bees, stab, core, ante, mess];
  for (let i = 0; i < loopArray.length; i++) {
    for (let h = 0; h < loopArray[i].length; h++) {
      if (loopArray[i][h][0].value == loopArray[i][h][1]) {
        wordArray[i].push(loopArray[i][h][1]);
      }
    }
  }
  for (let j = 0; j < wordMatchKey.length; j++) {
    if (wordArray[j].join("") == wordMatchKey[j][0]) {
      listChange(wordMatchKey[j][1]);
      removeIcon(wordMatchKey[j][2]);
    }
  }
  return;
  scam.join(""), tone.join(""), arts.join(""), bees.join("");
};

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", wordChecker);
}

//---- Game States and Progress Checks----//

//Color Changes
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
//Clue Item Changes
function removeIcon(icon) {
  icon.classList.remove("hideIcon");
}
function listChange(li) {
  li.classList.add("cluelistCorrect");
}

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

//-------BUTTONS------//
//Reveal

function revealAll() {
  for (let x = 0; x < letterKey.length; x++) {
    if (letterKey[x][0].value !== letterKey[x][1]) {
      input[x].value = letterKey[x][1];
      input[x].classList.add("blackLetter");
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
      input[i].disabled = true;
    }
  }
}
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", clueHighlight);
  function clueHighlight() {
    for (let b = 0; b < loopArray.length; b++) {
      loopArray[i][b][0].style.borderColor = "pink";
    }
  }
}

//--------------Cursor Behavior----------------//
for (let i = 0; i < input.length; i++) {
  input[i].autocomplete = "off";
}
//Cursor to next and backspace
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", cursorMove);
  function cursorMove(e) {
    let nextTarg = input[i];
    let myLength = nextTarg.value.length;
    if (myLength >= 1) {
      while ((nextTarg = nextTarg.nextElementSibling)) {
        if (nextTarg == null) break;
        if (nextTarg.disabled == true) {
          nextElementSibling = nextTarg.nextSibling.enabled;
          nextTarg.focus();
          break;
        }
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
