// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "john",
    "full name": "john Choudhary",
    [mySym]: "mykey1", // symbols are use like this with [] and also first we have to create a symbol and then we can use it as a key in the object. Symbols are unique and immutable. They are not enumerable. They are not included in for...in loop. They are not included in Object.keys() method. They are not included in Object.values() method. They are not included in Object.entries() method. They are not included in JSON.stringify() method.
    age: 18,
    location: "Jaipur",
    email: "john@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "john@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "john@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());