const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat will merge the two arrays and return a new array. It will not modify the original arrays.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator will merge the two arrays and return a new array. It will not modify the original arrays.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat will flatten the array and return a new array. It will not modify the original array. We can pass the depth as an argument to flat method. If we pass Infinity as an argument, it will flatten the array to any depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Array.isArray will check if the given value is an array or not. It will return true if the value is an array, otherwise it will return false.
console.log(Array.from("Hitesh")) // Array.from will convert the given value into an array and return the array. It will not modify the original value. We can also pass a map function as an argument to Array.from method. The map function will be called for each element of the array and the return value of the map function will be added to the new array.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of will create a new array with the given elements and return the array.