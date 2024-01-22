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

//calling one function inside another function

function Name(text){
  console.log("Welcome " + text)
}

function Input(){
  let name = prompt("What is your name: ")
  Name(name)  // Calling the other function within the function
}

Input()

//Funtion to find mIn value
function Min(num1,num2){
  if(num1 < num2){
    console.log("Small")
  }else{
    console.log("Big")
  }

}
Min(22,75)

//Function example 
var x = 1
a()
b()
console.log(x)


function a()
  var x = 10
  console.log(x)
function b()
  var x = 100
  console.log(x)
//out put of this program is 
//10
//100
//1

var a = 10
console.log(a)

console.log(x)

var a
console.log(a)

if(a === undefined){
  console.log("a is undefined")
}
else{
  console.log("a is not undefined")
}

// Closure example
function Outer(){
  var a = 20
  function Inner(){
    console.log(a)
  }
  return Inner()
}
var close = Outer()
close()

//Function statement
function a(){
  console.log("Javascript training")
}

//Function expression

var b = function (){
  console.log("b is called")
}

//Anonymous functions

function(){

}
// call back function
function (y){

}
x(function y(){

})
//Call back functions
setTimeout(function(){
  console.log("Timer")},5000)

function x(y){
  console.log("x")
  y()
}

x(function(y){
  console.log("y")
}) 
//out put will be x,y, timer

//Higher-order functions
function x(){         //Callback function
  console.log("Namaste")
}
function y(x){        //this is higher order function
  x()
}

///MAP functions//
const arr1 = [4,11,3,20,5,9]

function double(x){
  return x * 2
}

const output1 = arr.map(double)
console.log(output)

//Triple
function triple(x){
  return x * 3
}
const output2 = arr.map(triple)
console.log(output2)

//Binary
function Binary(x){
  return x.toString(2)
}
const output6 = arr.map(Binary)
console.log(output6)

//OR as an Arrow function
const output = arr.map((x)=>x.toString(2))
console.log(output)


// Filter functions//
const arr2 = [4,11,3,20,5,9]
function isOdd(x){
  return x%2
}

const output3 = arr2.filter(isOdd)
console.log(output3)

//Example 2
const arr3 = [3,11,8,25,5,9]

const output4 = arr3.filter((x) => x>7)
console.log(output4)

//Reduce function
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Outputs: 15


//reduce example 2
const findss = [5,44,8,6,51,3] 
const output5 = findss.reduce(function(max, curr){
  if (curr > max){
  max = curr
}
  return max 
}, 0 )
console.log(output5)

//Reduce example 3 - TO find sum of values in array
const output7 = arr.reduce(function(acc,curr){
  acc = acc +curr
  return acc
},0)
console.log(output7)

// Reduce to find the max value of an arrsy

arr = [2,4,7,3,60,24]
const output = arr.reduce(function(max,curr){
    if (curr >max){
        max = curr}
    return max
    
},0)
console.log(output)

//Reduce example 4
const users = [
  { firstname: "Lisna", lastname: "Thomas", age: 25 },
  { firstname: "Justin", lastname: "Issac", age: 28 },
  { firstname: "Aleena", lastname: "Baby", age: 16 },
  { firstname: "Albin", lastname: "Roy", age: 16 }
];

const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
    
},{})
console.log(output)

//Reduce example 5
const users = [
  { firstname: "Lisna", lastname: "Thomas", age: 25 },
  { firstname: "Justin", lastname: "Issac", age: 28 },
  { firstname: "Aleena", lastname: "Baby", age: 16 },
  { firstname: "Albin", lastname: "Roy", age: 16 }
];

const output = users.filter((x) =>x.age<20).map((x) =>x.firstname)
console.log(output)

//Reduce example 6
const users = [
  { firstname: "Lisna", lastname: "Thomas", age: 15 },
  { firstname: "Justin", lastname: "Issac", age: 28 },
  { firstname: "Aleena", lastname: "Baby", age: 26 },
  { firstname: "Albin", lastname: "Roy", age: 16 }
];

const op = users.reduce(function(acc, current){
    if (current.age<20){
        acc.push(current.firstname)
    }
    return acc
},[])
console.log(op)
