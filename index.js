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

let input = document.getElementsByTagName("input");

//Letter KEY
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
//Word Key

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
let listItem = document.getElementsByTagName("li");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", letterChecker);
  function letterChecker() {
    for (let j = 0; j < letterKey.length; j++) {
      // iterate through array
      if (input[i] == letterKey[j][0]) {
        // match input to nested array 0, which holds id
        if (input[i].value == letterKey[j][1]) {
          //if value of input match nested array 1, which hold letter
          correctColorChange(input[i]);
          wordChecker(input[i]);
        } else {
          incorrectColorChange(input[i]);
        } //end letter check
      } //end input id check
    } //loop2
  } //test function
} //end input loop

//list item change
let scam = letterKey.slice(0, 4);
let tone = letterKey.slice(4, 8);

let scamCounter = 0;
let toneCounter = 0;

function wordChecker(input) {
  for (let y = 0; y < scam.length; y++) {
    if (input.value == scam[y][1]) {
      scamCounter++;
    }
  }
  if (scamCounter >= 4) {
    for (let j = 0; j < listItem.length; j++) {
      listItem[0].style.color = "blue";
    }
  }
  for (y = 0; y < tone.length; y++) {
    if (input.value == tone[y][1]) {
      toneCounter++;
    }
  }
  if (toneCounter >= 4) {
    for (let j = 0; j < listItem.length; j++) {
      listItem[1].style.color = "blue";
    }
  }
}

// //--------------------------CORRECT WORDS-----------------------------//

// let input = document.getElementsByTagName("input");
// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("keyup", checkWord);
// }

// let scamCheck;
// let toneCheck;
// let artsCheck;
// let beesCheck;

// function checkWord() {
//   if (
//     A1_L1.value.toUpperCase().match("S") &&
//     A1_L2.value.toUpperCase().match("C") &&
//     A1_L3.value.toUpperCase().match("A") &&
//     A1_L4.value.toUpperCase().match("M")
//   ) {
//     scamCheck = true;
//   }
//   if (
//     A2_L1.value.toUpperCase().match("T") &&
//     A2_L2.value.toUpperCase().match("O") &&
//     A2_L3.value.toUpperCase().match("N") &&
//     A2_L4.value.toUpperCase().match("E")
//   ) {
//     toneCheck = true;
//   }
//   if (
//     A3_L1.value.toUpperCase().match("A") &&
//     A3_L2.value.toUpperCase().match("R") &&
//     A3_L3.value.toUpperCase().match("T") &&
//     A3_L4.value.toUpperCase().match("S")
//   ) {
//     artsCheck = true;
//   }
//   if (
//     A4_L1.value.toUpperCase().match("B") &&
//     A4_L2.value.toUpperCase().match("E") &&
//     A4_L3.value.toUpperCase().match("E") &&
//     A4_L4.value.toUpperCase().match("S")
//   ) {
//     beesCheck = true;
//   }
//   if (
//     scamCheck == true &&
//     toneCheck == true &&
//     artsCheck == true &&
//     beesCheck == true
//   ) {
//     document.querySelector("body").style.backgroundColor = "green";
//   }
// }
// //-------------LIST-----------
// // LIST CHECK
// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("keyup", list);
// }
// function correctListItem(listI) {
//   listI.style.color = "blue";
// }

// function list() {
//   if (scamCheck == true) {
//     let item = document.getElementById("scamclue");
//     correctListItem(item);
//   }
//   if (toneCheck == true) {
//     let item = document.getElementById("toneclue");
//     correctListItem(item);
//   }
//   if (artsCheck == true) {
//     let item = document.getElementById("artsclue");
//     correctListItem(item);
//   }
//   if (beesCheck == true) {
//     let item = document.getElementById("beesclue");
//     correctListItem(item);
//   }
// }

// ///------------BUTTONS----------------------------------
// //CLEAR ALL BUTTON
// let clearButton = document.getElementById("clearAll");
// clearButton.addEventListener("click", clearAll);

// function clearAll() {
//   document.querySelector("body").style.backgroundColor = "white";
//   let input = document.getElementsByTagName("input");
//   let listItem = document.getElementsByTagName("li");
//   for (let j = 0; j < listItem.length; j++) {
//     listItem[j].style.color = "black";
//   }
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].type == "text") {
//       input[i].value = "";
//       input[i].style.backgroundColor = "white";
//     }
//   }
//   scam1 = false;
//   scam2 = false;
//   scam3 = false;
//   scam4 = false;
//   tone1 = false;
//   tone2 = false;
//   tone3 = false;
//   tone4 = false;
//   arts1 = false;
//   arts2 = false;
//   arts3 = false;
//   arts4 = false;
//   bees1 = false;
//   bees2 = false;
//   bees3 = false;
//   bees4 = false;
//   scamCheck = false;
//   toneCheck = false;
//   artsCheck = false;
//   beesCheck = false;
// }

// //Reveal All
// let revealButton = document.getElementById("revealAll");
// revealButton.addEventListener("click", revealAll);

// function blackText(aNum) {
//   aNum.style.color = "black";
// }

// function revealAll() {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].type == "text") {
//       input[i].style.color = "black";
//     }
//   }

//   if (scam4 !== true) {
//     A1_L4.value = "m";
//     A1_L4.style.color = "black";
//   }
//   if (scam3 !== true) {
//     A1_L3.value = "a";
//     blackText(this);
//   }
//   if (scam2 !== true) {
//     A1_L2.value = "c";
//     blackText(this);
//   }
//   if (scam1 !== true) {
//     A1_L1.value = "s";
//     blackText(this);
//   }
//   if (A2_L4.value != "e") {
//     A2_L4.value = "e";
//     blackText(this);
//   }
//   if (A2_L3.value != "n") {
//     A2_L3.value = "n";
//     blackText(this);
//   }
//   if (A2_L2.value != "o") {
//     A2_L2.value = "o";
//     blackText(this);
//   }
//   if (A2_L1.value != "t") {
//     A2_L1.value = "t";
//     blackText(this);
//   }
//   if (A3_L1.value != "a") {
//     A3_L1.value = "a";
//     blackText(this);
//   }
//   if (A3_L2.value != "r") {
//     A3_L2.value = "r";
//     blackText(this);
//   }
//   if (A3_L3.value != "t") {
//     A3_L3.value = "t";
//     blackText(this);
//   }
//   if (A3_L4.value != "s") {
//     A3_L4.value = "s";
//     blackText(this);
//   }
//   if (A4_L4.value != "s") {
//     A4_L4.value = "s";
//     blackText(this);
//   }
//   if (A4_L3.value != "e") {
//     A4_L3.value = "e";
//     blackText(this);
//   }
//   if (A4_L2.value != "e") {
//     A4_L2.value = "e";
//     blackText(this);
//   }
//   if (A4_L1.value != "b") {
//     A4_L1.value = "b";
//     blackText(this);
//   }
// }

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
