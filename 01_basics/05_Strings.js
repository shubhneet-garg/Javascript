const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // substring will return the string from 0 index to 4 index but it will not include 4th index value.
console.log(newString);

const anotherString = gameName.slice(-8, 4) // negative index will start from end of the string and 4 is the end index so it will not include 4th index value. So it will return empty string.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim will remove the white spaces from start and end of the string.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('%20'));

console.log(gameName.split('-'));