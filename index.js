/* check list
-congrats button
-reveal button
*/

//CONGRATS BUTTON
let congrats = document.getElementById("congrats");
congrats.addEventListener("click", congratsFunction);

function congratsFunction() {
  if (
    A1_L4.value.toUpperCase().match("M") &&
    A1_L3.value.toUpperCase().match("A") &&
    A1_L2.value.toUpperCase().match("C") &&
    A1_L1.value.toUpperCase().match("S") &&
    A2_L1.value.toUpperCase().match("T") &&
    A2_L2.value.toUpperCase().match("O") &&
    A2_L3.value.toUpperCase().match("N") &&
    A2_L4.value.toUpperCase().match("E")
  ) {
    congrats.innerHTML = "congrats";
    congrats.style.padding = "7%";
  } else {
    congrats.innerHTML = "you're dumb, check again";
    congrats.style.textAlign = "center";
    congrats.style.padding = "0";
  }
}

//CLEAR ALL BUTTON
let clearButton = document.getElementById("clearAll");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  let input = document.getElementsByTagName("input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].type == "text") {
      input[i].value = "";
      input[i].style.backgroundColor = "white";
      congrats.innerHTML = "Done?";
      congrats.style.padding = "7%";
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
  // A1_L3.value.toUpperCase().match("A") &&
  // A1_L2.value.toUpperCase().match("C") &&
  // A1_L1.value.toUpperCase().match("S") &&
  // A2_L1.value.toUpperCase().match("T") &&
  // A2_L2.value.toUpperCase().match("O") &&
  // A2_L3.value.toUpperCase().match("N") &&
  // A2_L4.value.toUpperCase().match("E")
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
