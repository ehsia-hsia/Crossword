//CROSSWORD SETTINGS
function correctColorChange(square) {
  square.style.color = "blue";
  square.style.backgroundColor = "lightblue";
}
function incorrectColorChange(square) {
  square.style.color = "red";
  square.style.backgroundColor = "white";
  square.addEventListener("focus", clearletter);
  function clearletter() {
    square.value = "";
  }
}

// 1 ACROSS: SCAM
let input1 = document.getElementsByTagName("input");
for (let i = 0; i < input1.length; i++) {
  input1[i].addEventListener("keyup", checkLetter);
}

let A1_L1 = document.getElementById("across1L1Input");
A1_L1.addEventListener("keyup", A1L1);
let scam1;

let A1_L2 = document.getElementById("across1L2Input");
A1_L2.addEventListener("keyup", A1L2);
let scam2;

function checkLetter() {
  if (A1_L1.value.toUpperCase().match("S")) {
    scam1 = true;
  }
  if (A1_L2.value.toUpperCase().match("C")) {
    scam2 = true;
  }
}
// S

function A1L1() {
  if (scam1 !== true) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//C

function A1L2() {
  if (scam2 !== true) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//A

let A1_L3 = document.getElementById("across1L3Input");
A1_L3.addEventListener("keyup", A1L3);
function A1L3() {
  if (!A1_L3.value.toUpperCase().match("A")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//M
let A1_L4 = document.getElementById("across1L4Input");
A1_L4.addEventListener("keyup", A1L4);
function A1L4() {
  if (!A1_L4.value.toUpperCase().match("M")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

// 2 Across: TONE
//T
let A2_L1 = document.getElementById("across2L1Input");
A2_L1.addEventListener("keyup", A2L1);
function A2L1() {
  if (!A2_L1.value.toUpperCase().match("T")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}
//O
let A2_L2 = document.getElementById("across2L2Input");
A2_L2.addEventListener("keyup", A2L2);
function A2L2() {
  if (!A2_L2.value.toUpperCase().match("O")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}
//N
let A2_L3 = document.getElementById("across2L3Input");
A2_L3.addEventListener("keyup", A2L3);
function A2L3() {
  if (!A2_L3.value.toUpperCase().match("N")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}
//E
let A2_L4 = document.getElementById("across2L4Input");
A2_L4.addEventListener("keyup", A2L4);
function A2L4() {
  if (!A2_L4.value.toUpperCase().match("E")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

// 3 Across: Arts
//A
let A3_L1 = document.getElementById("across3L1Input");
A3_L1.addEventListener("keyup", A3L1);
function A3L1() {
  if (!A3_L1.value.toUpperCase().match("A")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//R
let A3_L2 = document.getElementById("across3L2Input");
A3_L2.addEventListener("keyup", A3L2);
function A3L2() {
  if (!A3_L2.value.toUpperCase().match("R")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//T
let A3_L3 = document.getElementById("across3L3Input");
A3_L3.addEventListener("keyup", A3L3);
function A3L3() {
  if (!A3_L3.value.toUpperCase().match("T")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//S
let A3_L4 = document.getElementById("across3L4Input");
A3_L4.addEventListener("keyup", A3L4);
function A3L4() {
  if (!A3_L4.value.toUpperCase().match("S")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

// 4 Across: bees
//B
let A4_L1 = document.getElementById("across4L1Input");
A4_L1.addEventListener("keyup", A4L1);
function A4L1() {
  if (!A4_L1.value.toUpperCase().match("B")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//E
let A4_L2 = document.getElementById("across4L2Input");
A4_L2.addEventListener("keyup", A4L2);
function A4L2() {
  if (!A4_L2.value.toUpperCase().match("E")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}

//E
let A4_L3 = document.getElementById("across4L3Input");
A4_L3.addEventListener("keyup", A4L3);
function A4L3() {
  if (!A4_L3.value.toUpperCase().match("E")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}
//S
let A4_L4 = document.getElementById("across4L4Input");
A4_L4.addEventListener("keyup", A4L4);
function A4L4() {
  if (!A4_L4.value.toUpperCase().match("S")) {
    incorrectColorChange(this);
  } else {
    correctColorChange(this);
  }
}
//--------------------------CORRECT WORDS-----------------------------//

let input = document.getElementsByTagName("input");
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", checkWord);
}

let scamCheck;
let toneCheck;
let artsCheck;
let beesCheck;

function checkWord() {
  if (
    A1_L1.value.toUpperCase().match("S") &&
    A1_L2.value.toUpperCase().match("C") &&
    A1_L3.value.toUpperCase().match("A") &&
    A1_L4.value.toUpperCase().match("M")
  ) {
    scamCheck = true;
  }
  if (
    A2_L1.value.toUpperCase().match("T") &&
    A2_L2.value.toUpperCase().match("O") &&
    A2_L3.value.toUpperCase().match("N") &&
    A2_L4.value.toUpperCase().match("E")
  ) {
    toneCheck = true;
  }
  if (
    A3_L1.value.toUpperCase().match("A") &&
    A3_L2.value.toUpperCase().match("R") &&
    A3_L3.value.toUpperCase().match("T") &&
    A3_L4.value.toUpperCase().match("S")
  ) {
    artsCheck = true;
  }
  if (
    A4_L1.value.toUpperCase().match("B") &&
    A4_L2.value.toUpperCase().match("E") &&
    A4_L3.value.toUpperCase().match("E") &&
    A4_L4.value.toUpperCase().match("S")
  ) {
    beesCheck = true;
  }
}
//-------------LIST-----------
// LIST CHECK
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", list);
}
function correctListItem(listI) {
  listI.style.color = "blue";
}

function list() {
  if (scamCheck == true) {
    let item = document.getElementById("scamclue");
    correctListItem(item);
  }
  if (toneCheck == true) {
    let item = document.getElementById("toneclue");
    correctListItem(item);
  }
  if (artsCheck == true) {
    let item = document.getElementById("artsclue");
    correctListItem(item);
  }
  if (beesCheck == true) {
    let item = document.getElementById("beesclue");
    correctListItem(item);
  }
}

///------------BUTTONS----------------------------------
//CLEAR ALL BUTTON
let clearButton = document.getElementById("clearAll");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  let input = document.getElementsByTagName("input");
  let listItem = document.getElementsByTagName("li");
  for (let j = 0; j < listItem.length; j++) {
    listItem[j].style.color = "black";
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i].type == "text") {
      input[i].value = "";
      input[i].style.backgroundColor = "white";
    }
  }
}

//Reveal All
let revealButton = document.getElementById("revealAll");
revealButton.addEventListener("click", revealAll);

function blackText(aNum) {
  aNum.style.color = "black";
}
function revealAll() {
  if (A1_L4.value != "m") {
    A1_L4.value = "m";
    blackText(this);
  }
  if (A1_L3.value != "a") {
    A1_L3.value = "a";
    blackText(this);
  }
  if (A1_L2.value != "c") {
    A1_L2.value = "c";
    blackText(this);
  }
  if (A1_L1.value != "s") {
    A1_L1.value = "s";
    blackText(this);
  }
  if (A2_L4.value != "e") {
    A2_L4.value = "e";
    blackText(this);
  }
  if (A2_L3.value != "n") {
    A2_L3.value = "n";
    blackText(this);
  }
  if (A2_L2.value != "o") {
    A2_L2.value = "o";
    blackText(this);
  }
  if (A2_L1.value != "t") {
    A2_L1.value = "t";
    blackText(this);
  }
  if (A3_L1.value != "a") {
    A3_L1.value = "a";
    blackText(this);
  }
  if (A3_L2.value != "r") {
    A3_L2.value = "r";
    blackText(this);
  }
  if (A3_L3.value != "t") {
    A3_L3.value = "t";
    blackText(this);
  }
  if (A3_L4.value != "s") {
    A3_L4.value = "s";
    blackText(this);
  }
  if (A4_L4.value != "s") {
    A4_L4.value = "s";
    blackText(this);
  }
  if (A4_L3.value != "e") {
    A4_L3.value = "e";
    blackText(this);
  }
  if (A4_L2.value != "e") {
    A4_L2.value = "e";
    blackText(this);
  }
  if (A4_L1.value != "b") {
    A4_L1.value = "b";
    blackText(this);
  }
}

//--------------SOME OG SAMPLES-------------------

/* check list
-congrats button
-reveal button
*/

//CONGRATS BUTTON
/*let congrats = document.getElementById("congrats");
congrats.addEventListener("click", congratsFunction);

function congratsFunction() {
  if (
    A1_L1.value.toUpperCase().match("S") &&
    A1_L2.value.toUpperCase().match("C") &&
    A1_L3.value.toUpperCase().match("A") &&
    A1_L4.value.toUpperCase().match("M") &&
    A2_L1.value.toUpperCase().match("T") &&
    A2_L2.value.toUpperCase().match("O") &&
    A2_L3.value.toUpperCase().match("N") &&
    A2_L4.value.toUpperCase().match("E") &&
    A3_L1.value.toUpperCase().match("A") &&
    A3_L2.value.toUpperCase().match("R") &&
    A3_L3.value.toUpperCase().match("T") &&
    A3_L4.value.toUpperCase().match("S") &&
    A4_L1.value.toUpperCase().match("B") &&
    A4_L2.value.toUpperCase().match("E") &&
    A4_L3.value.toUpperCase().match("E") &&
    A4_L4.value.toUpperCase().match("S")
  ) {
    congrats.innerHTML = "congrats";
    congrats.style.padding = "7%";
  } else {
    congrats.innerHTML = "you're dumb, check again";
    congrats.style.textAlign = "center";
    congrats.style.padding = "0";
  }
}
*/

// // 1 ACROSS: SCAM
// let A1_L1 = document.getElementById("across1L1Input");
// A1_L1.addEventListener("keyup", A1L1);

// function A1L1() {
//   A1_L1.style.color = "black";

//   if (!A1_L1.value.toUpperCase().match("S")) {
//     A1_L1.style.color = "red";
//     A1_L1.style.backgroundColor = "white";
//     A1_L1.addEventListener("click", clearletter);
//     function clearletter() {
//       this.value = "";
//     }
//   } else {
//     A1_L1.style.color = "blue";
//     A1_L1.style.backgroundColor = "lightblue";
//   }
// }
// let A1_L2 = document.getElementById("across1L2Input");
// A1_L2.addEventListener("keyup", A1L2);
// function A1L2() {
//   if (!A1_L2.value.toUpperCase().match("C")) {
//     incorrectColorChange(this);
//   } else {
//     correctColorChange(this);
//   }
// }
