console.log("hello");
console.log(1 + 1);

setTimeout(() => {
  console.log("2 seconds had passed");
}, 2000);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "hello",
  })
);
