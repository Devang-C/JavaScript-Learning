// FUNCTIONS : There are two types : predefined and user defined. Till now we have only used predefined functions. Now we will also create our own function
// Functions allows us to reuse a certain block of code

function MultiplicationTable(num){ // it is not necessary that a function should have a parameter. Here num is a parameter.
    for(let i=1;i<=10;i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write("<br>");
    }
}

// calling a function
MultiplicationTable(8); // this value that we pass to a function is called a argument

document.write("<br>");


function add(num1,num2){
    document.write(num1+num2);
}
add(10,20);

// lets say we want to add 3 numbers or 4 numbers or whatever in that case what to do ?
// so here we don't know how many numbers the user will pass, which he wants to add 

//in such situatons THE ARGUMENTS OBJECT is useful

// here we dont define any parameter in the function
document.write("<br>");
document.write("<br>");

function addNumbers(){
    // arguments.length // this is an inbuilt array where all the parameters passed will be stored.
    // console.log(arguments.length);
    // console.log(arguments);
    // using argument we will know how many parameters are passed in the function, and we can access each using arguments[0] and so on
    if(arguments.length==0){
        document.write("No parameters passed in function");
    }
    else{
        let sum = 0;
        for(let i=0;i<arguments.length;i++){
            sum += arguments[i];
        }
        console.log(sum);
    }
}
addNumbers(10,20,40,50);

// store function in a variable

let addVariable = addNumbers;

addVariable(10,20,30,40,50,60);

// Return Type of Function in Javascript
function f1(a,b){
    let d = a+b;
    return d; // return is used so that we can store the value given by the function to some varialbe
}
// if we dont use a return function it will give undefined value. So if no return is used in above function then, undefined will be stored in variable c below.
// we cannot use multiple returns in the same function. we can write it, but as soon as complier sees the first return it ends the program.
let c = f1(60,200);
console.log(c);

function compare(a,b){
    if(a>b){
        return 1;
    }
    else if(b>a){
        return -1;
    }
    else{
        return 0;
    }
}   

// Global Variable vs local variable

let car = "Ferrari"; // This becomes a global variable

function f2(){
    let num = 102; // This becomes a local variable because it is inside a funciton. It can only be used within the scope of the function(meaning in the function only)
}

// console.log(num) --> This will give error in the code because it is local variable and we are using it outside the scope of the function



// ANONYMOUS FUNCTION
// function(){
//     console.log("Hello World")
// }
// first use case: say we want to assing a function to a variable. Then why give name to function in the first place. Here we use annonymus functions.

// This is called function expression(note the semicolon at the end)
let show = function(){
    console.log("Hello WOrld")
};

show();

// say we want to show the hello world after a few seconds then we can use setTimeout function;
// setTimeout(functionName,timeInMiliseconds)

setTimeout(show,3000); 

// anonymous function is also used when we want to use a function only once. So we dont give name to it so as not to waste the ram of computer.

setTimeout(function(){
    console.log("Anonymous Function!!!")
},3000) // This will also work.


// Immediately invoked function
// lets say we want to make a function and immediately execute it 
(function(){
    console.log("Immediately Invoked Function !!")
})(); // this is the way we write an immediately invoked function
