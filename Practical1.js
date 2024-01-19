var age = 25;
console.log(age);
alert("Hello");
let Name = "Bincy";
Name = "Jose";
console.log(Name);

const letter = "box";
console.log(letter);

let value = 15;
value -= 20;

console.log(value);

alert(prompt("Enter your name"));

let Designation = prompt("What is your designation");
alert(Designation);

let Namee = "Wonderland";
console.log(`Welcome to ${Namee}`);

// JS conditional statements Example 1 //

if (10 > 5) {
  console.log("Big");
} else {
  console.log("Small");
}

// JS conditional statements Example 2 //

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
  console.log("Big");
} else if (num1 == num2) {
  console.log("Same");
} else {
  console.log("Small");
}

//switch statement //

let number = prompt("Enter a number between 1 - 4");
switch (number) {
  case "1":
    alert("One");
    break;
  case "2":
    alert("Two");
    break;
  case "3":
    alert("Three");
    break;
  case "4":
    alert("Four");
    break;
  default:
    alert("Not found");
}
//Switch statement end

//Function in Js - sample1
function Sample(){
    console.log("Javascript")
}
Sample()

//Function in Js - sample2
let Number = Math.random() //random is a build in function for generating a random  number
console.log(Number)

//Function for simple addition
function Add(num1, num2){

let result = num1 + num2
return result
}
console.log(Add(20,50))

//Function example with prompt
function Name(){
    let name = prompt("What is your name")
    console.log(`Welcome ${name}`)
}
Name()


