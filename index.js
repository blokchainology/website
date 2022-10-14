const Lstart1 = document.querySelector(".LSclick");
const modalL1 = document.querySelector(".modalL1");
const modalL2 = document.querySelector(".modalL2");
const modalP1 = document.querySelector(".modalP1");
const modalP2 = document.querySelector(".modalP2");
const modalc = document.querySelector(".modalc");
const modalA = document.querySelector(".modalA");
const section1 = document.querySelector("section1");
const section2 = document.querySelector("section2");
const section3 = document.querySelector("section3");
const section4 = document.querySelector("section4");
const section5 = document.querySelector("section5");

function startml1() {
  modalL1.style.display = "flex";
  modalL1.style.margin = "0 auto";
  modalP1.style.display = "none";
}

function CmodalL1() {
  modalL1.style.display = "none";
  modalP1.style.display = "none";
}

function startmp1() {
  modalP1.style.display = "flex";
  modalP1.style.margin = "0 auto";
  modalL1.style.display = "none";
}

function startmp2() {
  modalP2.style.display = "flex";
  modalP2.style.margin = "0 auto";
  modalL2.style.display = "none";
}

function startml2() {
  modalL2.style.display = "flex";
  modalL2.style.margin = "0 auto";
  modalP2.style.display = "none";
}

function CmodalL2() {
  modalP2.style.display = "none";
  modalL2.style.display = "none";
}

let i = 0;
let x;
function SMD() {
  x = i++;
  closeA();
  if (x % 2 == 0) {
    modalc.style.display = "inline-block";
  } else {
    modalc.style.display = "none";
  }
}

function closemc(){
  modalc.style.display = "none";
  x = i++;
}

let m = 0;
let y;
function MA() {
  y = m++;
  closemc();
  if (y % 2 == 0) {
    modalA.style.display = "inline-block";
  } else {
    modalA.style.display = "none";
  }
}

function closeA() {
  y = m++ ;
  modalA.style.display = "none";
}

section1.addEventListener("click" , ()=> {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
})

section2.addEventListener("click" , ()=> {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
})

section3.addEventListener("click" , ()=> {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
})

section4.addEventListener("click" , ()=> {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
})

section5.addEventListener("click" , ()=> {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
})

function close() {
  modalc.style.display = "none";
  modalA.style.display = "none";
  x = i++;
  y = m++;
}