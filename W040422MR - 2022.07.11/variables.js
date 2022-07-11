// const a // Uncaught SyntaxError: Missing initializer in const declaration
const MINUTES_IN_WEEK = 5 * 24 * 7;

// MINUTES_IN_WEEK = 55445; //Uncaught TypeError: Assignment to constant variable.

console["log"](MINUTES_IN_WEEK * 52);
console.log(MINUTES_IN_WEEK * 52);

let x;
console.log(x);
x = 8;
console.log(x);
x = "hello";
console.log(x);
x = true;
console.log(x);

let y = 5;

const obj = {};
console.log(obj);
console.log(obj.a); // property that was not defined inside the object is undefined
obj.a = 5;
console.log(obj);
console.log(obj.a);
obj["b"] = 10;
console.log(obj);
console.log(obj.b);

console.log(globalThis);
console.log(window);

console.log(window.document);
