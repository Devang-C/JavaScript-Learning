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
student1.nationality = "Indian";
console.log(student1);