/* this version set empty values to each letter and decided true or false and ran functions based on true or flase values. lot of hard coded values and functions for each variable  and so many varibles. */
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
