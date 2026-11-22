//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

console.log(typeof bigNumber);



// Reference (Non primitive)

// Objects, arrays, functions are reference types and their All type is object.
// null has type of object but it is not a reference type. It is a primitive type.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array 

let myObj = {
    name: "Shubhneet",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Reference)
//Primitive assignment copies the value. Object assignment copies the reference.

// Example of primitive assignment
let myYoutubeName = "Shubhneetdotcom";

let anothername = myYoutubeName;

anothername = "chai aur code";

console.log(myYoutubeName);
console.log(anothername);


// Example of reference assignment
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "Shubhneet@google.com";

console.log(userOne.email);
console.log(userTwo.email);