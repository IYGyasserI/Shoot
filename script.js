//RONDOM NUMBER GENERATOR

const B1 = document.getElementById("B1");
const L1 = document.getElementById("L1");
const min = 1;
const max = 6;
let randomNum;

B1.onclick =function(){
    randomNum = Math.floor(Math.random() * max) + min;
    L1.textContent =randomNum;
}