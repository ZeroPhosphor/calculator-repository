var calcPromp = document.body.querySelector(".calculator")

var userInput = prompt("Please input a number")

var userInputtwo = prompt("Please input a second number")

var numberOne=userInput;
var numberTwo=userInputtwo;

calcPromp.innerHTML=Number(numberOne)+Number(numberTwo)