//CROSSWORD SETTINGS

//________________COLOR CHANGES________________
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

//_______________LETTER CHECKER____________________
let input1 = document.getElementsByTagName("input");
for (let i = 0; i < input1.length; i++) {
  input1[i].addEventListener("keyup", checkLetter);
}

function checkLetter() {
  if (A1_L1.value.toUpperCase().match("S")) {
    scam1 = true;
  }
  if (A1_L2.value.toUpperCase().match("C")) {
    scam2 = true;
  }
  if (A1_L3.value.toUpperCase().match("A")) {
    scam3 = true;
  }
  if (A1_L4.value.toUpperCase().match("M")) {
    scam4 = true;
  }
  if (A2_L1.value.toUpperCase().match("T")) {
    tone1 = true;
  }
  if (A2_L2.value.toUpperCase().match("O")) {
    tone2 = true;
  }
  if (A2_L3.value.toUpperCase().match("N")) {
    tone3 = true;
  }
  if (A2_L4.value.toUpperCase().match("E")) {
    tone4 = true;
  }
  if (A3_L1.value.toUpperCase().match("A")) {
    arts1 = true;
  }
  if (A3_L2.value.toUpperCase().match("R")) {
    arts2 = true;
  }
  if (A3_L3.value.toUpperCase().match("T")) {
    arts3 = true;
  }
  if (A3_L4.value.toUpperCase().match("S")) {
    arts4 = true;
  }
  if (A4_L1.value.toUpperCase().match("B")) {
    bees1 = true;
  }
  if (A4_L2.value.toUpperCase().match("E")) {
    bees2 = true;
  }
  if (A4_L3.value.toUpperCase().match("E")) {
    bees3 = true;
  }
  if (A4_L4.value.toUpperCase().match("S")) {
    bees4 = true;
  }
}

//____1 ACROSS: SCAM____

let A1_L1 = document.getElementById("across1L1Input");
A1_L1.addEventListener("keyup", A1L1);
let scam1;

let A1_L2 = document.getElementById("across1L2Input");
A1_L2.addEventListener("keyup", A1L2);
let scam2;

let A1_L3 = document.getElementById("across1L3Input");
A1_L3.addEventListener("keyup", A1L3);
let scam3;

let A1_L4 = document.getElementById("across1L4Input");
A1_L4.addEventListener("keyup", A1L4);
let scam4;
// S
function A1L1() {
  return scam1 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//C
function A1L2() {
  return scam2 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//A
function A1L3() {
  return scam3 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//M
function A1L4() {
  return scam4 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

// ________2 Across: TONE__

let A2_L1 = document.getElementById("across2L1Input");
A2_L1.addEventListener("keyup", A2L1);
let tone1;

let A2_L2 = document.getElementById("across2L2Input");
A2_L2.addEventListener("keyup", A2L2);
let tone2;

let A2_L3 = document.getElementById("across2L3Input");
A2_L3.addEventListener("keyup", A2L3);
let tone3;

let A2_L4 = document.getElementById("across2L4Input");
A2_L4.addEventListener("keyup", A2L4);
let tone4;

//T
function A2L1() {
  return tone1 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//O
function A2L2() {
  return tone2 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//N
function A2L3() {
  return tone3 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//E
function A2L4() {
  return tone4 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//_________3 Across: Arts__________
let A3_L1 = document.getElementById("across3L1Input");
A3_L1.addEventListener("keyup", A3L1);
let arts1;

let A3_L2 = document.getElementById("across3L2Input");
A3_L2.addEventListener("keyup", A3L2);
let arts2;

let A3_L3 = document.getElementById("across3L3Input");
A3_L3.addEventListener("keyup", A3L3);
let arts3;

let A3_L4 = document.getElementById("across3L4Input");
A3_L4.addEventListener("keyup", A3L4);
let arts4;

//A
function A3L1() {
  return arts1 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//R
function A3L2() {
  return arts2 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//T
function A3L3() {
  return arts3 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//S
function A3L4() {
  return arts4 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//_________4 Across: bees___________
let A4_L1 = document.getElementById("across4L1Input");
A4_L1.addEventListener("keyup", A4L1);
let bees1;

let A4_L2 = document.getElementById("across4L2Input");
A4_L2.addEventListener("keyup", A4L2);
let bees2;

let A4_L3 = document.getElementById("across4L3Input");
A4_L3.addEventListener("keyup", A4L3);
let bees3;

let A4_L4 = document.getElementById("across4L4Input");
A4_L4.addEventListener("keyup", A4L4);
let bees4;

//B
function A4L1() {
  return bees1 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//E
function A4L2() {
  return bees2 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//E
function A4L3() {
  return bees3 !== true ? incorrectColorChange(this) : correctColorChange(this);
}

//S
function A4L4() {
  return bees4 !== true ? incorrectColorChange(this) : correctColorChange(this);
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
  if (
    scamCheck == true &&
    toneCheck == true &&
    artsCheck == true &&
    beesCheck == true
  ) {
    document.querySelector("body").style.backgroundColor = "green";
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
  document.querySelector("body").style.backgroundColor = "white";

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
  scam1 = false;
  scam2 = false;
  scam3 = false;
  scam4 = false;
  tone1 = false;
  tone2 = false;
  tone3 = false;
  tone4 = false;
  arts1 = false;
  arts2 = false;
  arts3 = false;
  arts4 = false;
  bees1 = false;
  bees2 = false;
  bees3 = false;
  bees4 = false;
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
  if (scam1 !== true) {
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
