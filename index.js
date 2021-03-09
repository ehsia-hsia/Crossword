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

let input = document.getElementsByTagName("input");

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

let scam = letterKey.slice(0, 4);
let scamCounter = 0;

let tone = letterKey.slice(4, 8);
let toneCounter = 0;

let arts = letterKey.slice(8, 12);
let artsCounter = 0;
let bees = letterKey.slice(12, 16);
let beesCounter = 0;
//__________WORD CHECKER____________

//Scam
for (let i = 0; i < scam.length; i++) {
  let letter = [
    scam[0].slice(1, 2),
    scam[1].slice(1, 2),
    scam[2].slice(1, 2),
    scam[3].slice(1, 2),
  ];
  for (let n = 0; n < input.length; n++) {
    input[n].addEventListener("keyup", tester);
    function tester() {
      if (input[n].value == letter[i]) {
        scamCounter++;
      } else {
        scamCounter;
      }
      if (scamCounter >= letter.length) {
        listChange(listItem[0]);
      }
    }
  }
}
//Tone
for (let i = 0; i < scam.length; i++) {
  let letter = [
    tone[0].slice(1, 2),
    tone[1].slice(1, 2),
    tone[2].slice(1, 2),
    tone[3].slice(1, 2),
  ];
  for (let n = 0; n < input.length; n++) {
    input[n].addEventListener("keyup", tester);
    function tester() {
      if (input[n].value == letter[i]) {
        toneCounter++;
      } else {
        toneCounter;
      }
      if (toneCounter >= letter.length) {
        listChange(listItem[1]);
      }
    }
  }
}
function listChange(li) {
  li.classList.add("cluelistCorrect");
}

//________________COLOR CHANGES and Status________________
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

function congratsCounterStyles() {
  congratsCounter++;
  if (congratsCounter == 0) {
    status.textContent = "Status: ";
  }
  if (congratsCounter >= input.length) {
    status.textContent = "Status: COMPLETE!";
  } else if (congratsCounter >= input.length / 2) {
    status.textContent = "Status: 50% complete...";
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
    let last = nextTarg.previousElementSibling;
    if (e.key == "Backspace") {
      last == nextTarg.null ? (nextTarg = input[i]) : last.focus();
    }
  }
}

//_______________LETTER CHECKER____________________
let congratsCounter = 0;
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
          congratsCounterStyles();
        } else {
          incorrectColorChange(input[i]);
        } //end letter check
      } //end input id check
    } //loop2
  } //test function
} //end input loop

//______BUTTONS_____________
let revealButton = document.getElementById("revealAll");
revealButton.addEventListener("click", revealAll);
function revealAll() {}

//Clear
let clearButton = document.getElementById("clearAll");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  scamCounter = 0;
  toneCounter = 0;
  artsCounter = 0;
  beesCounter = 0;
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
    }
  }
}
