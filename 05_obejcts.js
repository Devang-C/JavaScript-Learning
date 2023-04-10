// Objects in JavaScript : Everything around us is an object. Eg book,pen,laptop.phone, etc etc. Similary in js everythin is an object
/* 
Objects
1. Properties
2. Action or Function(method)

Object Properties : Name,Height,Mobile no, weight etc etc.
The thing that defies something is called its property

Object Action/Function: Eat,walk,run,talk,study
The actions that the object performs is called methods or functions

Objects in Programming : 
Student,Teacher,Course etc in School Management System
Account,Account Holder,cashier,bank manager,Balance etc in Bank Management Systen
Book,Writer,IssueDate, etc in Library management system 
*/

// CREATE AN OBJECT
let person = {firstName: "Devang",
              lastName : "Chavan"
};

person.firstName = 'Raj'; // modifying any property of an object

console.log(typeof(person));    
console.log(person);

//access properties of a object
console.log(person.firstName);
// console.log(person['firstName']); This can also be used to acces an object

//creating a new property after creating an object

person.age = 19;  // this adds age property to the person object
console.log(person);

// how to delete a property
delete person.age;

console.log(person); 

//how to check if any property is defined or not. Use IN operator
console.log('height' in person); // this will return a boolean value true or false. property should be in single quotes.

//iteratre over every single property of an object using loop

for(let key in person){
    console.log(key); // gives only the name of the property
    // say we want the value of property as well
    console.log(key," ",person[key]) // dot operator would not work in loops.
}


// METHODS IN OBJECTS : Normal functions are called methods when dealing with objects

// 4 ways to do so: 

//1. 
person.sayHello = function(){   // annonymous function. This anonymous function is assigned to sayHello method
    console.log("Hello");
}

person.sayHello(); // while calling a function we need to use parentheses at the end unlike while calling properties.

// //2.
// function greet(){
//     console.log("Hello");
// }
// person.sayHello2 = greet;

// 3 : Declare the function while declaring the obejcts
let person2 = {firstName: "Devang",
              lastName : "Chavan",
              sayHello3: function(){
                console.log("Hello");
              }
            };  
person2.sayHello3();

//4: the 4th way of creating a method was introduced in ES6.
let person3 = {firstName: "Devang",
              lastName : "Chavan",
              sayHello3(){   // no need to write function
                console.log("Hello");
              }
            };  


// this KEYWORD
let car = {
    brand:'BMW',
    model:'A6'
}

//4: the 4th way of creating a method was introduced in ES6.
let person4 = {firstName: "Devang",
              lastName : "Chavan",
              sayHello3(){   // no need to write function
                console.log("Hello Myself "+this.firstName+"and I own a "+car.brand); // we are calling this method inside an object
                // hence no need to write person4.firstName. We can simply write this.firstName. Therefore no need to write name of object again and again
              }
            }; 
person4.sayHello3();


// The Math Object. This is an inbuilt object
console.log(Math.PI); // gives us the value of Pi.
console.log(Math.E); // gives us the Eulers number.

var x = 10.8;
console.log(Math.round(x)); // rounds of any number. say 1.5 or anything above that will round off to 2. 1.5 and anything below that will be rounded off to 1.

// Ceiling and floor concept in maths: 
// Ceiling will give highest of any number(Upper Limit). Example 1.2 will be rounded off to 2 as well(even though normall 1.2 should round off to 1).
// FLoor will give minimun of any number(Lower Limit). Example 7.8 will be rounded off to 7(even though normally 7.8 should round off to 8)
console.log(Math.floor(x));

console.log(Math.trunc(x)); // removes anything after point.

console.log(Math.pow(10,3)); // Gives us value of powers. in this example it gives value of 10 power 3.
console.log(Math.sqrt(100));

// max and min methods: Gives us the maximum and minimum of n numbers
console.log(Math.min(10,3,-5,11,25,0));


// Random Number Generator in JS
let y = Math.random(); // by default generates a number between 0 and 1

console.log(Math.random()*10); // moves one decimal to the rigth

console.log(Math.floor(Math.random()*10)); // this will remove decimal and give a random number between 1 and 10
// Multiplying it will 10 gives us number between 0-9. To get number between 0-10 multiply with 11. To get numbers between 0-6 multiply with 7

console.log(Math.floor(Math.random()*7)+1); // this will give number between 1-6; Excludes 0 because we added 1 to it.

// say we want to generate random number between 15 and 25. Now we have both the upper limit and lower limit
// so formula to generate random number now is
// Math.floor(Math.random()*(upper-lower)+lower)

console.log(Math.floor(Math.random()*(25-15)+15)); // generates numbers between 15 and 24;
// we will regularly need this method so we create our own function for this actoin

function randomGenerator(min,max){
    let x = Math.floor(Math.random()*(max-min)+min+1); // +1 so as to include max number as well
    return x;
}

console.log(randomGenerator(100,105)); // gives num between 100-104


// Date Object: 
// Note : In Js Month starts from 0. Meaning Jaunary is 0 and December is 11.

// new   Date(year,month,day,hour,minute,second,milisecond)
let date = new Date(); // this stores the date that is on my computer 

let ManualDate = new Date(2003,9,30,14,45);
console.log(ManualDate);
// In console we can see how the date is shown but in reality it is not stored in that way

// the date is stored in miliseconds. Starting from 1st Jan 1970 to the date we mention, it will store it in miliseconds.

//methods in Date object
console.log(ManualDate.getTime()); // this gives total miliseconds from 1970 to the date we have mentioned. It is the same way its stored in

console.log(ManualDate.getFullYear());
console.log(ManualDate.getMonth());
console.log(ManualDate.getDate());
// similarly we can get hours minutes and seconds as well
console.log(ManualDate.getDay()); // gets the day of the week

