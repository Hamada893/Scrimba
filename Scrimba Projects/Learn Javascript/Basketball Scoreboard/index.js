let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// All for num1 (aka the HOME scoreboard)

function plusOne() {
  num1 = num1 + 1
  document.getElementById("num1-el").textContent = num1
}
function plusTwo() {
  num1 = num1 + 2
  document.getElementById("num1-el").textContent = num1
}
function plusThree() {
  num1 = num1 + 3
  document.getElementById("num1-el").textContent = num1
}

// All for num2 (aka the GUEST screen)
function plusOneEl() {
  num2 = num2 + 1
  document.getElementById("num2-el").textContent = num2
}
function plusTwoEl() {
  num2 = num2 + 2
  document.getElementById("num2-el").textContent = num2
}
function plusThreeEl() {
  num2 = num2 + 3
  document.getElementById("num2-el").textContent = num2
}
