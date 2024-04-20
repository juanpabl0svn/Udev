//Old way to import modules
const express = require("express");

//New way to import modules
import express from "express";

//Variables in JS
let letVar = 1; //Can change with the time
const bVar = 2; //Can't change
var cVar = 3; //Can change with the time (old way)


// Objects in JS (JSON = JavaScript Object Notation) Similar to Python Dictionaries
const obj = {
  name: "Juan",
  age: 25,
  "last name": "Perez",
  sayMyName() {
    //You can use "this" in an object to refer to the object itself (useing only sayMyName: function(){} or naming it sayMyName(){})
    // You can use "this" in an arrow function
    console.log(this.name);
  },
};

// IMPORTANT: If you want to have a better control of the object, create a class this way
// The same as the last but we can create the setter and getter, create inherence, polimorfism, etc.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this.name;
  }
  set name(name) {
    return;
  }

  sayMyName() {
    console.log(this.name);
  }
}

// Arrays in JS have several methods to manipulate the data
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map: It creates a new array with the results of calling a provided function on every element in the calling array.
const newArr = arr.map((element) => element * 2);

// Filter: It creates a new array with all elements that pass the test implemented by the provided function.
const filterArr = arr.filter((element) => element % 2 === 0);

// Reduce: It executes a reducer function (that you provide) on each element of the array, resulting in single output value.
const reduceArr = arr.reduce((acc, element) => acc + element, 0);

//And many more... (find, findIndex, some, every, fill ,forEach, etc.)

//Spread operator: You can get the elements of an array or object and put them in another array or object
//Get the first and second element of the array and put the rest in another array (rest)
const [a, b, ...rest] = [...arr];

// If there is no element in the array, you can put a default value
const [c = 0, d = 1, ...restArray] = [...arr];

//Get the properties name and age of the array and put the rest in another object (restObj)
const { name, age, ...restObj } = {
  name: "Juan",
  age: 25,
  lastName: "Perez",
  country: "Mexico",
};
//You can change the name of the property to avoid errors with variables naming
const {
  name: newName,
  age: newAge,
  ...restObj2
} = {
  name: "Juan",
  age: 25,
  lastName: "Perez",
  country: "Mexico",
};

//CAREFULL: You acces to more deep properties of an object, you can get an error
const {
  address: { street, number },
  ...restObj3
} = {
  name: "Juan",
  age: 25,
  lastName: "Perez",
  country: "Mexico",
  address: {
    street: "Main Street",
    number: 123,
  },
};

//Cicles in JS

//For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Foreach loop
for (let element of arr) {
  console.log(element);
}


//Async/await
//You can use async/await to handle asynchronous code in a synchronous way
//You can use it with promises (Promises are like a contract that you will get a value in the future)
//A new Promise has two parameters, resolve and reject (resolve if when the promise is successful, reject if it fails)
//In code you call the function, use then if the promise is successful and catch if it fails and handle everything
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
};

fetchData().then((data) => {console.log(data)}).catch((error) => {console.log(error)});


//With async/await you can do the same but in a synchronous way
//It must be in a function and you must use the keyword async
//Here as you can see, you have to use try/catch to handle the errors
const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


//You can know what is the type of a variable with typeof and its instance with instanceof
console.log(typeof letVar); //number
console.log(obj instanceof Number); //false

