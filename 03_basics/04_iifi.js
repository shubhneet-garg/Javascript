// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that runs as soon as it is defined and use for data privacy and avoid polluting the global scope

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')