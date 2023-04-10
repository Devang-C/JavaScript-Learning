"use script"  // enables strict mode

// NEW keyword in JavaScript
// Create objects using new keyword

// Traditional way of creating an object is JS
// var person = {
//     fname : "Devang",
//     lname : "Chavan",
//     age : 19
// }

// Creating object using new keyword
var person = new Object(); // person object has been created
person.fname = 'Devang';
person.lname = 'Chavan';

console.log(person.fname);

// getters and setter in object
// get : used when we want to create a function that can be called as we call a property and not a method. 
//       Useful when we want to manipulate some data and then show that to the user

// set : used to change some property of the object. used when we want to manipulate some data and then store that data in the object.

var person2 = {
    fname : "Devang",
    lname : "Chavan",
    age : 19,

    // say we want to create a method that prints name in upper case
    get getUpperCase(){
        return this.fname.toUpperCase();
    },

    set setNameUpper(n){ // what set function does is, it directly stores(sets) the name entered in capital letter only. 
        this.fname = n.toUpperCase();
    }
};

console.log(person2.getUpperCase); // here we can see that we don't need to open close brackets while calling the method
// this is because we used getter

console.log(person2);


// Object Constructor Function in JS

var student1 = {
    fname : "Devang",
    lname : "Chavan",
    age : 20,
    S_class : 'A'
};  

var student2 = {
    fname : "Ram",
    lname : "Solanki",
    age : 19,
    S_class : 'C'
};  

// say we want to create 100 such students with same properties and methods, only the value is changing, then in this case Classes are used.
// In JS class was introduced after ES6. Before that this was done using object constructor.

// while creating object constructor try to name such that the first letter is capital


// object constructor function
function Student(first,last,age,cls){
    this.fname = first;
    this.lname - last;
    this.age = age;
    this.S_Class = cls;
}

// declaring the objects
var student1 = new Student("Devang","Chavan",19,"B");
var student2 = new Student("Ram","Pawar",20,"C");
var student3 = new Student("Sham","Solanki",19,"A");

console.log(student1);

// add a property to a particular object
// student1.nationality = "Indian";
// console.log(student1);

// OBJECT PROTOTYES
// we saw that we can add a new property to an object by simple doing student1.marks = 85
// say we want to do that for the entire constructor 

// we can directly add that property in the object construcutor, but say we want to add property afterwards
Student.prototype.nationality = 'Indian';

var student4 = new Student('ALex',"Hales",18,"E");
console.log(student4.nationality );


// NESTED OBJECTS : Object within an object
let user = {
    id:100,
    email : "abc@work.com",
    personalInfo : {
        name: "Adam",
        address : {
            street: "Ashok Nagar Tathawade",
            city : "Pune",
            state : "Maharastra",
            country : "India"
        }
    }
};
console.log(user);
console.log(user.personalInfo);

console.log(user.personalInfo.address.country);


// HOISTING :  Meaning "TO LIFT"

// this still works : we are calling a function before declaring it, but this still works in js because before execurting the code, it reads the entire code
// and then executes. This puts all the declaration at the top of the file
hello();

function hello(){
    console.log("HELLO")
}

// variables 
let x1; // this automatically sets value to undefined
console.log(x1); // will give output undefined
x1 = 100;

x2 = 20;
console.log(x2); // will give output 20 because the declaration will be moved up
var x2; // this works with var and not let

// say we declare a variable and assign value to it
console.log(x3);

x3 = 120; // here the js interpreter will only lift the declaration part of x3 to the top and keep the assigning value to it there only
// therefore output of console.log will be undefined

// HOISTING works for let and const as well but thing in while using let or const we declare a variable, but we dont initialize it by default.
// thats why we get the error variable not initialized

// in case of var, it is automatically initialized to undefined

// This works because js declares the variable for us in case we forgot to do so
// but this is the reason for a lot of bugs in our code.
// We can disable this by enabling strict mode
x4 = 'Devang';
console.log(x4);