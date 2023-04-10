// WHAT IS DOM ? 
// The Document Objec Model(DOM) is an Application programming interface(API) for manipulating HTML and XML documents. 
// (add,remove,and modify parts of HTML document)

// When a page is loaded, the browser creates a Document Object Model of the page

// With the Object Model, JS gets all the power it needs to create dynamic HTML 
/* 
1. JS can change all HTML elements in the page
2. JS can change all HTML attributes in the page
3. JS can change all the CSS Styles in the page
4. JS can remove existing HTML elemetns and attributes
5. JS can add new HTML elements and attributes
6. JS can react to all existing HTML events in the page
7. JS can create new HTML element in the page
*/

//  NOTE : In DOM, all the HTML elements are defined as objects, so it will have both property and method
// The document object represents your webpage

// If you want to access any element in HTML page, you always start with accessing the document object


// SELECT ELEMENT BY id
var ele = document.getElementById("first"); // NOT WORKING GIVING NULL !!!  
console.log(ele);

let cla = document.getElementsByClassName('list1');
console.log(cla);