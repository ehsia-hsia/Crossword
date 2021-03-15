/* this version set empty values to each letter and decided true or false and ran functions based on true or flase values. lot of hard coded values and functions for each variable  and so many varibles. */

// let congratsCounter = 0;
// function congratsCounterStyles() {
//   if (congratsCounter >= input.length) {
//     status.textContent = "Status: COMPLETE!";
//     openModal();
//   } else if (congratsCounter >= input.length * 0.6) {
//     status.textContent = "Status: Almost complete...";
//   } else if (congratsCounter >= input.length * 0.5) {
//     status.textContent = "Status: 50% complete...";
//   } else if (congratsCounter >= input.length * 0.25) {
//     status.textContent = `Status: 25% complete... `;
//   } else if (congratsCounter == 0) {
//     status.textContent = "Status: ";
//   }
// }
// 1. iterate throught input and call this
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
let scam = letterKey.slice(0, 4);
let scamCounter = 0;

let tone = letterKey.slice(4, 8);
let toneCounter = 0;

let arts = letterKey.slice(8, 12);
let artsCounter = 0;

let bees = letterKey.slice(12, 16);
let beesCounter = 0;
//__________WORD CHECKER and List Change____________

//Scam
for (let i = 0; i < scam.length; i++) {
  let scamArr = [
    scam[0].slice(1, 2),
    scam[1].slice(1, 2),
    scam[2].slice(1, 2),
    scam[3].slice(1, 2),
  ];
  for (let n = 0; n < input.length; n++) {
    input[n].addEventListener("keyup", scamCheck);
    function scamCheck() {
      if (input[n].value == scamArr[i]) {
        scamCounter++;
        console.log(artsCounter);
      } else {
        scamCounter;
      }
      if (scamCounter >= scamArr.length) {
        listChange(listItem[0]);
      }
    }
  }
}
//Tone
for (let i = 0; i < tone.length; i++) {
  let toneArr = [
    tone[0].slice(1, 2),
    tone[1].slice(1, 2),
    tone[2].slice(1, 2),
    tone[3].slice(1, 2),
  ];
  for (let n = 0; n < letterKey.length; n++) {
    letterKey[n][0].addEventListener("keyup", toneCheck);
    function toneCheck() {
      if (input[n].value == toneArr[i]) {
        toneCounter++;
        console.log(artsCounter);
      } else {
        toneCounter;
      }
      if (toneCounter >= toneArr.length) {
        listChange(listItem[1]);
      }
    }
  }
}
//Arts
for (let i = 0; i < arts.length; i++) {
  let artsArr = [
    arts[0].slice(1, 2),
    arts[1].slice(1, 2),
    arts[2].slice(1, 2),
    arts[3].slice(1, 2),
  ];
  for (let n = 0; n < input.length; n++) {
    input[n].addEventListener("keyup", artscheck);
    function artscheck() {
      if (input[n].value == artsArr[i]) {
        artsCounter++;
        console.log(artsCounter);
      } else {
        artsCounter;
      }

      if (artsCounter >= 4) {
        listChange(listItem[2]);
      }
    }
  }
}

//bees
for (let i = 0; i < scam.length; i++) {
  let beesArr = [
    bees[0].slice(1, 2),
    bees[1].slice(1, 2),
    bees[2].slice(1, 2),
    bees[3].slice(1, 2),
  ];
  for (let n = 0; n < input.length; n++) {
    input[n].addEventListener("keyup", tester);
    function tester() {
      if (input[n].value == beesArr[i]) {
        beesCounter++;
      } else {
        beesCounter;
      }
      if (beesCounter >= beesArr.length) {
        listChange(listItem[3]);
      }
    }
  }
}

function wordTest() {
  // let scam =
  //   letterKey[0][0].value.toString() +
  //   input[1].value.toString() +
  //   input[2].value.toString() +
  //   input[3].value.toString();
  // if (scam == "scam") {
  //   listChange(listItem[0]);
  //   removeIcon(checkIcon[0]);
  // }

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
//Works for one word
// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("keyup", sliceFunction);
// }
// let sliceFunction = function () {
//   let scam = [];
//   for (let i = 0; i < scaamItems.length; i++) {
//     if (scaamItems[i][0].value == scaamItems[i][1]) {
//       scam.push(scaamItems[i][1]);
//     }
//   }
//   if (scam.join("") == scaamItems[4][0]) {
//     document.body.style.backgroundColor = "pink";
//     listChange(scaamItems[4][1]);
//     removeIcon(scaamItems[4][2]);
//   }
//   return scam.join("");
// };
// ____1 ACROSS: SCAM____

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

let words = [
  {
    word: "scam",
    slicey: letterKey.slice(0, 5),
    id: function () {
      for (let i = 0; i < this.slicey.length; i++) {
        return this.slicey[i][0];
      }
    },
  },
];

function sliceFunction() {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == words[i].id()) {
      document.body.style.backgroundColor = "pink";
    } else {
      document.body.style.backgroundColor = "blue";
    }
  }
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

// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("keyup", wordChecker);
//   function wordChecker() {

//       if (input.value == letter) {
//         document.body.backgroundColor = "pink";
//       }
//     }
//   }
// }

//_________LIST CHANGE______________

// let scamCounter = 0;
// let toneCounter = 0;
// let artsCounter = 0;
// let beesCounter = 0;

// function wordChecker(input) {//   //Scam Check

//   for (let y = 0; y < scam.length; y++) {
//     if (input.value.match(scam[y][1])) {
//       scamCounter++;
//     }
//   }
//   if (scamCounter === 4) {
//     listItem[0].style.color = "blue";
//   }

//   //Tone Check
//   for (z = 0; z < tone.length; z++) {
//     if (input.value == tone[z][1] && input == tone[z][0]) {
//       toneCounter++;
//     }
//   }
//   if (toneCounter == 4) {
//     listItem[1].style.color = "blue";
//   }
//   //Arts Check
//   for (a = 0; a < arts.length; a++) {
//     if ((input.value = arts[a][1] && input == arts[a][0])) {
//       artsCounter++;
//     }
//   }
//   if (artsCounter == 4) {
//     listItem[2].style.color = "red";
//   }
//   //Bees Check
//   for (b = 0; b < bees.length; b++) {
//     if (input.value == bees[b][1]) {
//       beesCounter++;
//     }
//   }
//   if (beesCounter === 4) {
//     listItem[3].style.color = "blue";
//   }
// }

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
