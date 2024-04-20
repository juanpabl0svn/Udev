//Get DOM elements
document.querySelector("anything");
// CAREFULL: if you put a word, it will look for a HTML tag with that
// if yout put .anything, it will look for a class with that name
// if you put #anything, it will look for an id with that name
//And there are many more but with these you can start

//Get multiple elements
document.querySelectorAll("anything");
// CAREFULL: it will return a NodeList, not an array
//Node: Element of the DOM, if you edit this, it will change in the page


//You can add an event listener to an element
//Search the element
const element = document.querySelector("anything");
//Add the event listener
element.addEventListener("event", (e) => {});
//An event has 2 parameters (name of the event (click, input,onkeyup,animationend,mouseover,...etc), function that will exceute when the event is triggered)
//As you can see, this function (callback: Function passed as an argument) has a parameter (e) which is the event object
// This will have all the information of the event (target, type, key, keyCode, etc.)

//There are global objects in JS
document
window
localStorage // This comes from window.localStorage (save data in the browser to use it later (even if the page reloads))
sessionStorage // This comes from window.sessionStorage (save data in the browser to use it later (only in the current session))
document.cookies // This is a string with all the cookies of the page, (cookies are data that can be read in the server)
//There are more global objects, but these are the most common
new FormData(); // This is a constructor to create a new FormData object
new IntersectionObserver(); //This helps to create amazing effects when the user scrolls the page
new Promise(); // This is a constructor to create a new Promise object
new Map(); // This is a constructor to create a new Map object 
new Set(); // This is a constructor to create a new Set object
// Many more


//Insert an element in the DOM
//Search the element
const elementToAdd = document.querySelector("anything");
//Create the element
const newElement = document.createElement("anything");
//Insert the element
elementToAdd.appendChild(newElement);
//You can insert the element in different ways (before, after, etc.)
//You can insert the element in a specific position
elementToAdd.insertBefore(newElement, elementToAdd.children[0]);
// position can be: beforebegin, afterbegin, beforeend, afterend
elementToAdd.insertAdjacentElement("position", newElement);
//You can remove the element
elementToAdd.removeChild(newElement);
//or remove the element itself
newElement.remove();
