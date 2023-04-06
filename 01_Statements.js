//STATEMENTS IN JAVASCRIPT
var num;
num = 5;
// this will pop up an alert 5
alert(num);

// VARIABLES IN JavaScript

var digit1 = 50;
var string1 = 'Hello From Variable String';
// alert(string1);

var digit2 = 100;

var digit3 = digit1 + digit2;
// console.log gives the output in the console
// console.log(digit3);
// When ES6 came, it discarded(it still works but new methods are there) var and it brought in two new names to decalare variable
// 1. constansts
// 2. let
let x = 10;
let y = 20;
let z; // declare a varialbe. We can assign value to it later.

z = x+y;
const t = 0.001; // const meaning THE VARIABLE WILL NOT CHANGE THROUGHOUT THE PROGRAM
console.log(x+y);
// NEVER USE words that are RESERVED in JavaScript.




// OPERATORS in JavaScript

// Remainder operator
z = 20 % 10;
console.log(z);

// x = x+2 can also be written as x+=2

// x = x+y can also be written as x+= y 

//power
let power= x ** y;
console.log(power);

let a = 5; // number
let b = '5'; // string
// when we try to add number to a string, JS will understand this and it will convert the number to the string and give output
console.log(a+b);

let c = 'Hello';
let d = 'World';
console.log(c+" "+d);





// DATA TYPES in JavaScript
x=5;
x = 'data changed'; 
// In JavaScript changing of data type is allowed. Thats why its called dynamic data type;

// lets say we want double quotes in a statement
x = "Hello\"World\"";
console.log(x);

// Boolean data type : Only two values true or false

x = 2>3; // This will return a value true or false based on the condition we give;
console.log(x);

//Array Data Type
let arr1 = ["devang","raju","shyam"];

// Object Data Type
let man = {name:"devang",age:19,course:'CSE'};
console.log(man);

// Undefined is also a type of data type
let q;
console.log(q); 

// typeof OPERATOR : Tells us the type of anything
console.log(typeof(man));

// How to reference a variable directly in a string:
// First lets see indirect method
x = 'this is a string';
alert('hello '+x);

// Direct method : We need to use backtick" ` ". It is below escape key in keyboard. and we need to add $ before the variable.
alert(`hello ${x} that is with backtick`);


