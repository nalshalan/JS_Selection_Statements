console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const num = 3;

let randNum = window.prompt("Enter your number");

if (randNum < num) {
  console.log("too low");
} else if (randNum > num) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

// Exercise 2
let birthMonth = window.prompt("What is your birth month?");

switch(birthMonth) {
  case "January":
    console.log("You were born in winter");
    break;
  case "February":
    console.log("You were born in winter");
    break;
  case "March":
    console.log("You were born in spring");
    break;
  case "April":
    console.log("You were born in spring");
    break;
  case "May":
    console.log("You were born in spring");
    break;
  case "June":
    console.log("You were born in summer");
    break;
  case "July":
    console.log("You were born in summer");
    break;
  case "August":
    console.log("You were born in summer");
    break;
  case "September":
    console.log("You were born in fall");
    break;
  case "October":
    console.log("You were born in fall");
    break;
  case "November":
    console.log("You were born in fall");
    break;
  case "December":
    console.log("You were born in winter");
    break;
  default:
    console.log("Invalid month.");
}

// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    console.log(type = "Tank top");
    break;
  case "02":
    console.log(type = "T-Shirt");
    break;
  case "03":
    console.log(type = "Long Sleeve");
    break;
  case "04":
    console.log(type = "Sweat Shirt");
    break;
  default:
    console.log(type = "Other");
}

switch (colorId) {
  case "BK":
    console.log(color = "Black");
    break;
  case "BL":
    console.log(color = "Blue");
    break;
  case "RD":
    console.log(color = "Red");
    break;
  case "PU":
    console.log(color = "Purple");
    break;
  default:
    console.log(color = "White");
}

switch (sizeId) {
  case "S":
    console.log(size = "Small");
    break;
  case "M":
    console.log(size = "Medium");
    break;
  case "L":
    console.log(size = "Large");
    break;
  case "XL":
    console.log(size = "Extra Large");
    break;
  default:
    console.log(size = "One Size Fits All");
} 

console.log(`Product: ${size} ${color} ${type}`);