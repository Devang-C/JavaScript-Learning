// Operators in JavaScript
/*
1. == : Does not check data type
2. === : checks the data type
3. != : Does not check data type
4. !== : Checks the data type
5. >
6. <
7. >=
8. <=
9. ! : not. Reverse whatever the boolean output is
Logical Operator
1. && : If all conditions are true then only this operator will give true
2. || : Or operator. If any one condition is true then the operator will give true
*/
console.log("== Operators")
console.log("5=5 is ", 5 == 5);

// In JavaScript the == IGNORES THE DATA TYPE

console.log("5='5'is ", 5 == '5'); // This will also give true in Js

/// === . This will check the value as well as the data type 
console.log(5 === '5');


// && operator
console.log("&&(And) Operator");
console.log(5 > 6 && 10 > 2);




// CONDITIONS in JavaScript
let age = 19;
let hasVoterId = 'Yes';
if (age >= 18 && hasVoterId == 'Yes') {
    console.log("Your age is 18 or above and you have voter id. You can vote :)");
}
else if (age >= 18 && hasVoterId == 'No') {
    console.log("You dont have a voter id. Get a voter id to vote");
}
else {
    console.log("You are below 18. You cannot vote :/")
}

// Ternary operator in JavaScript : Only used when we have a small code in the if else condition
let isloggedIn = 0; // if 0 means loggedOut, if 1 means loggedIn

// if(isloggedIn==0){
//     document.write('Login');
// }
// else{
//     document.write('Logout');
// }

// How to use ternary operator
let option = isloggedIn == 1 ? "Logout" : "Login";
//   condition          true output  flase output
// "Logout" will only work when isLoggendIn response is 1. Otherwise if the condition is false then we will show login  
document.write(option);


let user;
// we will only show user when the user is logged in. if suppose the user is not logged in and we execute the below code it will give undefined in alert 
// user = 'Devang';
// alert(user);

// Using null operator to solve the above problem
// user = "Devang";
alert(user ?? "Guest User");
// this operator will check if value of given varialbe is null or not. If it is null it will show the output that we say, in this case guest user.


document.write("  ")
// Switch statement : only strict comparison(===) is used in switch statement

// say input:1 or 'y' or 'yes' then give output continue...
// input: 0 or 'n' or 'no' then give output end...
let input;

input = "y";

switch (input) {
    case 1: // meaning if input is 1
        document.write("continue...");
        break;
    case 'y':
        document.write("continue");
        break;

    case 'yes':
        document.write("continue...");
        break;

    case 0:
        document.write("End...");
        break;

    case 'n':
        document.write("End...");
        break;

    case 'no':
        document.write("End...");
        break;
    default:
        document.write("Wrong INput");
}




document.write("<br>");

// Loops in JavaScript
// While loop
// do while loop
// for loop

// while loop
let counter = 0;
while(counter<=10){
    document.write("Devang <br>");
    counter++; // counter = counter +1
    // counter+=2 meaning counter = counter + 2 
}

document.write("<br>");

// lets say we want to find sum of numbers that are divisible by 2 between 1-100
let num=1;
let sum=0;

while(counter<=100){
    if(counter%2==0){
        sum += counter;
    }
    counter+=1;
}
document.write("Sum of even number between 1-100 is ",sum);
document.write("<br>");
// do while loop : same as while but executes once before checking the while condition
let x = 12;
do{
    document.write('Devang');
}
while(x<=10);
// the above do while loop will execute once even if the while condition is not true

document.write("<br>");
// for loop
for(let i=0; i<10;i++){
    document.write("Devang Using Loop <br>");
}



// BREAK, CONTINUE and NESTED LOOPS
document.write("<br>");
document.write("Break Continue and Nested loops");
document.write("<br>");

document.write("Break <br>")
for(let count=1; count<=10; count++){
    if(count==5){
        break; // breaks the loop if the condition is satisfied
    } 
    document.write(count,'<br>');
}

document.write("Continue <br>")
for(let count=1; count<=10; count++){
    if(count==5){
        continue; // does not execute the statements below continue, but it will stll execute the remaining for loop
    } 
    document.write(count,'<br>'); // this will not be executed
}

document.write("Nested Loops <br>");




outer: for(let count=1; count<=10; count++){ // outer meaning we mention that it is the outer loop. This is a label

    document.write(count,'<br>');

    for(let count2=1;count2<=3;count2++){
        if(count==3){
            break outer; // if we just write break it will not know which loop to break
        }
        document.write("Devang <br>")
    }
}




// ALERT PROMPT and CONFIRM
// functions to interact with the user : alert, prompt, and confirm

/* 
1. alert() - shows a message
2. prompt() - shows a message, input text. It returns text on ok, or if cancel button or Esc is clicked, null
3. confirm() - shows a message, confirm with "OK" or "Cancel". It returns true for ok and false for cancel
*/

alert("Welcome");

let myAge = prompt("Enter Your age",20); // this 20 is the default value that we put if need

if(myAge!=null){
    document.write("<br>",`Your age is ${myAge}`);
}
else{
    document.write("<br> Age field was blank");
}

let response= confirm('Are you sure you want to delete ?');   
if(response){
    document.write("deleted");
}
else{
    document.write("Not deleted");
}