// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // unshift will add the element at the start of the array
// myArr.shift() // shift will remove the element from the start of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // join will convert the array into string and return the string. It will join the elements of the array with comma by default. We can also pass a separator as an argument to join method.

// console.log(myArr);
// console.log(newArr);


// slice, splice
// slice will return a new array with the selected elements. It will not modify the original array.
// splice will modify the original array and return the removed elements.

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // [ 1, 2 ]

console.log(myn1);
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) // [ 1, 2, 3 ] // it will remove the elements from index 1 to index 3 and return the removed elements. It will modify the original array.
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]