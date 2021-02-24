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
function revealAll() {
  if (A1_L4.value != "m") {
    A1_L4.value = "m";
    A1_L4.style.color = "black";
  }
  if (A1_L3.value != "a") {
    A1_L3.value = "a";
    A1_L3.style.color = "black";
  }
  if (A1_L2.value != "c") {
    A1_L2.value = "c";
    A1_L2.style.color = "black";
  }
  if (A1_L1.value != "s") {
    A1_L1.value = "s";
    A1_L1.style.color = "black";
  }
  if (A2_L4.value != "e") {
    A2_L4.value = "e";
    A2_L4.style.color = "black";
  }
  if (A2_L3.value != "n") {
    A2_L3.value = "n";
    A2_L3.style.color = "black";
  }
  if (A2_L2.value != "o") {
    A2_L2.value = "o";
    A2_L2.style.color = "black";
  }
  if (A2_L1.value != "t") {
    A2_L1.value = "t";
    A2_L1.style.color = "black";
  }
  if (A3_L1.value != "a") {
    A3_L1.value = "a";
    A3_L1.style.color = "black";
  }
  if (A3_L2.value != "r") {
    A3_L2.value = "r";
    A3_L2.style.color = "black";
  }
  if (A3_L3.value != "t") {
    A3_L3.value = "t";
    A3_L3.style.color = "black";
  }
  if (A3_L4.value != "s") {
    A3_L4.value = "s";
    A3_L4.style.color = "black";
  }
  if (A4_L4.value != "s") {
    A4_L4.value = "s";
    A4_L4.style.color = "black";
  }
  if (A4_L3.value != "e") {
    A4_L3.value = "e";
    A4_L3.style.color = "black";
  }
  if (A4_L2.value != "e") {
    A4_L2.value = "e";
    A4_L2.style.color = "black";
  }
  if (A4_L1.value != "b") {
    A4_L1.value = "b";
    A4_L1.style.color = "black";
  }
}

//CROSSWORD SETTINGS

// 1 ACROSS: SCAM
let A1_L1 = document.getElementById("across1L1Input");
A1_L1.addEventListener("keyup", A1L1);
function A1L1() {
  if (!A1_L1.value.toUpperCase().match("S")) {
    A1_L1.style.color = "red";
    A1_L1.style.backgroundColor = "white";
  } else {
    A1_L1.style.color = "blue";
    A1_L1.style.backgroundColor = "lightblue";
  }
}

let A1_L2 = document.getElementById("across1L2Input");
A1_L2.addEventListener("keyup", A1L2);
function A1L2() {
  if (!A1_L2.value.toUpperCase().match("C")) {
    A1_L2.style.color = "red";
    A1_L2.style.backgroundColor = "white";
  } else {
    A1_L2.style.color = "blue";
    A1_L2.style.backgroundColor = "lightblue";
  }
}

let A1_L3 = document.getElementById("across1L3Input");
A1_L3.addEventListener("keyup", A1L3);
function A1L3() {
  if (!A1_L3.value.toUpperCase().match("A")) {
    A1_L3.style.color = "red";
    A1_L3.style.backgroundColor = "white";
  } else {
    A1_L3.style.color = "blue";
    A1_L3.style.backgroundColor = "lightblue";
  }
}

let A1_L4 = document.getElementById("across1L4Input");
A1_L4.addEventListener("keyup", A1L4);
function A1L4() {
  if (!A1_L4.value.toUpperCase().match("M")) {
    A1_L4.style.color = "red";
    A1_L4.style.backgroundColor = "white";
  } else {
    A1_L4.style.color = "blue";
    A1_L4.style.backgroundColor = "lightblue";
  }
}

// 2 Across: TONE

let A2_L1 = document.getElementById("across2L1Input");
A2_L1.addEventListener("keyup", A2L1);
function A2L1() {
  if (!A2_L1.value.toUpperCase().match("T")) {
    A2_L1.style.color = "red";
    A2_L1.style.backgroundColor = "white";
  } else {
    A2_L1.style.color = "blue";
    A2_L1.style.backgroundColor = "lightblue";
  }
}

let A2_L2 = document.getElementById("across2L2Input");
A2_L2.addEventListener("keyup", A2L2);
function A2L2() {
  if (!A2_L2.value.toUpperCase().match("O")) {
    A2_L2.style.color = "red";
    A2_L2.style.backgroundColor = "white";
  } else {
    A2_L2.style.color = "blue";
    A2_L2.style.backgroundColor = "lightblue";
  }
}

let A2_L3 = document.getElementById("across2L3Input");
A2_L3.addEventListener("keyup", A2L3);
function A2L3() {
  if (!A2_L3.value.toUpperCase().match("N")) {
    A2_L3.style.color = "red";
    A2_L3.style.backgroundColor = "white";
  } else {
    A2_L3.style.color = "blue";
    A2_L3.style.backgroundColor = "lightblue";
  }
}

let A2_L4 = document.getElementById("across2L4Input");
A2_L4.addEventListener("keyup", A2L4);
function A2L4() {
  if (!A2_L4.value.toUpperCase().match("E")) {
    A2_L4.style.color = "red";
    A2_L4.style.backgroundColor = "white";
  } else {
    A2_L4.style.color = "blue";
    A2_L4.style.backgroundColor = "lightblue";
  }
}

// 3 Across: Arts

let A3_L1 = document.getElementById("across3L1Input");
A3_L1.addEventListener("keyup", A3L1);
function A3L1() {
  if (!A3_L1.value.toUpperCase().match("A")) {
    A3_L1.style.color = "red";
    A3_L1.style.backgroundColor = "white";
  } else {
    A3_L1.style.color = "blue";
    A3_L1.style.backgroundColor = "lightblue";
  }
}

let A3_L2 = document.getElementById("across3L2Input");
A3_L2.addEventListener("keyup", A3L2);
function A3L2() {
  if (!A3_L2.value.toUpperCase().match("R")) {
    A3_L2.style.color = "red";
    A3_L2.style.backgroundColor = "white";
  } else {
    A3_L2.style.color = "blue";
    A3_L2.style.backgroundColor = "lightblue";
  }
}

let A3_L3 = document.getElementById("across3L3Input");
A3_L3.addEventListener("keyup", A3L3);
function A3L3() {
  if (!A3_L3.value.toUpperCase().match("T")) {
    A3_L3.style.color = "red";
    A3_L3.style.backgroundColor = "white";
  } else {
    A3_L3.style.color = "blue";
    A3_L3.style.backgroundColor = "lightblue";
  }
}

let A3_L4 = document.getElementById("across3L4Input");
A3_L4.addEventListener("keyup", A3L4);
function A3L4() {
  if (!A3_L4.value.toUpperCase().match("S")) {
    A3_L4.style.color = "red";
    A3_L4.style.backgroundColor = "white";
  } else {
    A3_L4.style.color = "blue";
    A3_L4.style.backgroundColor = "lightblue";
  }
}

// 4 Across: bees
let A4_L1 = document.getElementById("across4L1Input");
A4_L1.addEventListener("keyup", A4L1);
function A4L1() {
  if (!A4_L1.value.toUpperCase().match("B")) {
    A4_L1.style.color = "red";
    A4_L1.style.backgroundColor = "white";
  } else {
    A4_L1.style.color = "blue";
    A4_L1.style.backgroundColor = "lightblue";
  }
}

let A4_L2 = document.getElementById("across4L2Input");
A4_L2.addEventListener("keyup", A4L2);
function A4L2() {
  if (!A4_L2.value.toUpperCase().match("E")) {
    A4_L2.style.color = "red";
    A4_L2.style.backgroundColor = "white";
  } else {
    A4_L2.style.color = "blue";
    A4_L2.style.backgroundColor = "lightblue";
  }
}

let A4_L3 = document.getElementById("across4L3Input");
A4_L3.addEventListener("keyup", A4L3);
function A4L3() {
  if (!A4_L3.value.toUpperCase().match("E")) {
    A4_L3.style.color = "red";
    A4_L3.style.backgroundColor = "white";
  } else {
    A4_L3.style.color = "blue";
    A4_L3.style.backgroundColor = "lightblue";
  }
}

let A4_L4 = document.getElementById("across4L4Input");
A4_L4.addEventListener("keyup", A4L4);
function A4L4() {
  if (!A4_L4.value.toUpperCase().match("S")) {
    A4_L4.style.color = "red";
    A4_L4.style.backgroundColor = "white";
  } else {
    A4_L4.style.color = "blue";
    A4_L4.style.backgroundColor = "lightblue";
  }
}

//List Clues

let input = document.getElementsByTagName("input");
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", list);
}
function list() {
  let scam = document.getElementById("scamclue");
  if (
    A1_L1.value.toUpperCase().match("S") &&
    A1_L2.value.toUpperCase().match("C") &&
    A1_L3.value.toUpperCase().match("A") &&
    A1_L4.value.toUpperCase().match("M")
  ) {
    scam.style.color = "blue";
  } else {
    scam.style.color = "black";
  }
}
