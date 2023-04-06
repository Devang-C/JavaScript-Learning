// Type Conversion in JavaScript

let text = "Hello WOrld";
// console.log(text);
// console.log(typeof(text));

let text2 = "5" + 2; // + operator can be used for adding numbers as well as strings. When we do this same thing with - operator it will act as a number now
// console.log(text2);
// console.log(typeof(text2));

let text3 = "5" - 2; // - operator never works with string, so it will consider 5 as number and perform the operation. same with *(multiplication) operator
// console.log(text3);
// console.log(typeof(text3)); 

// Functions for type conversion
/* 
1. String() : Converts anything to string
2. Number() : converts to number. When we convert any word to a number it gives NaN(not a number ). A true boolean will be converted to 1 and false to 0.
3. Boolean() : converts to boolean
*/

let word = 4;
// console.log(typeof(word));

let newWord = String(word);
// console.log(typeof(newWord));




// String Manipulation in JS

let myname = "Devang \n \"Chavan\" "; //   \n gives a new line. \t gives tab spaces 

let greet = `Hi ${myname} `; // this is called template literal
console.log(greet);
console.log(greet.length);

//lets say we want to fetch some characters of the string
console.log(greet[3]);
console.log(greet[0]);

// how to concatinate a string
let fname = 'Devang';
let lname = 'Chavan';

console.log(fname + " " + lname);

// how to compare two strings
if ("devang" == fname) {  // it comes not equal. Meaning it is case sensitive 
    console.log("Both are Equal");
}
else {
    console.log("Not Equal");
}

// function to concatinate two strings
let fullName = fname.concat(" ", lname);
console.log(`Name using concat function ${fullName}`);

// find substring from a given string
let sentence = "This is a JavaScript tutorial."

let substring = sentence.substr(10, 19);    // 2 parameters we have to pass. first position from where to start. second start counting from where we started from 1
// upto where we want to create the substring. if we look in above example when we start counting from J as 1 we end
// up to l of tutorial with 19 characters. Thats why 19 is the second parameter.
console.log(substring);


let substring2 = sentence.substring(10, 29); // this method also takes 2 parameters but here we start from where we want the substring and end to the position
// we want the substring to end(position counted from the start only)
console.log(substring2);

// how to find strating index of a text or word 
let index = sentence.indexOf('tutorial', 10); // second parameter is from where to start searching. This is useful whne we have multiple words with same names
console.log(index);
// how to find index of word strating from the last position. Meaning it will start searching from the last position
let lastindex = sentence.lastIndexOf('tutorial');
console.log(lastindex);

// removing extra whitespaces at start and end of a string using trim
let newSentence = " There are extra spaces at start and end  ";
console.log(newSentence);

let trimmedSent = newSentence.trim();
console.log(trimmedSent);
// We can also use trimstart to remove only whitespaces at the start and trimend to remove whitespaces only at the end.


// Change to Upper Case or Lower Case
let upper = newSentence.toUpperCase();
console.log(upper);

let lower = newSentence.toLowerCase();
console.log(lower);

// how to replace a word with some other word using replace
let replaced = newSentence.replace('start', 'beginning');
console.log(replaced);

// check if a word or substring is present in the string or not
let isIncluded = newSentence.includes('new');
console.log(isIncluded); // gives boolean value





// ARRAYS IN JAVASCRIPT

console.log("Arrays in JavaScript");

let subjects = ['Maths', 'Science', 'English', 'History'];
// let subjects = new Array('Maths','Science','English','History'); Another way to create array
console.log(subjects);
console.log(subjects[0]);

// it is not necessary that an array must contain only numbers or only strings. It can have different types of data.

// Operations on Arrays

// lenght function
console.log(subjects.length);

// append to the end ot the array
subjects.push('Hindi');
console.log(subjects);

// append to the start of the array
subjects.unshift('Computer');
console.log(subjects);

//remove last element from the array
subjects.pop();
console.log(subjects);

// remove first element from the array
subjects.shift();
console.log(subjects);

// how to remove any element from the array
subjects.splice(1, 1) // first parameter is the position of element we want to delete. Second is how many elements we want to delete after that
console.log(subjects);

//how to empty an array
// subjects = []; // method 1 
// subjects.length = 0; method 2;


// find position of an element in the array
let pos = subjects.indexOf('Maths');
console.log(pos);

// how to check if a variable is an array or not
let sub = "Maths";
console.log(Array.isArray(sub));

let newText = "This is a random text";
// say we want to convert each character of this text to an array: Use split function 

let wordArray = newText.split(' ') // we need to pass parameter of where to split. in most cases we will split when we see a blank space. 
console.log(wordArray);

// how to join array to text
let SubjectText = subjects.join(' ');
console.log(SubjectText);

// how to combine two arrays together using concat
let subject2 = ['Physics', 'Chemistry', 'Biology', 'EVS'];

let allSubjects = subjects.concat(subject2);
console.log(allSubjects);

// Multidimensional Array : Array inside an array

let bookWithPages = [
                        ['Maths', 700],
                        ['Physics', 900],
                        ['Chemistry', 650]
                    ];
console.log(bookWithPages);
console.log(bookWithPages[0][1]);

//loop through an array
subjects = ['Maths', 'Science', 'English', 'History'];
subjectsLength = subjects.length;
for(let i=0;i<subjectsLength;i++){
    console.log(`Element ${i} is ${subjects[i]}`);
}

// loop through array using forEach
subjects.forEach(myFunction);

function myFunction(value){
    console.log(value)
}
