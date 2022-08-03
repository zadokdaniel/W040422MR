// Example 1
x = letterCounter[letter];
if (x) {
  x = x + 1;
} else {
  x = 1;
}

x = x ? x + 1 : 1;

// Example 2
const greeting = x > 5 ? "hello" : "bye";

// Example 3
const user = {
  name: "daniel",
  age: 28,
};

// const greetUser = `${user.name} is `;
// if (user.age > 18) {
//   greetUser += " old";
// } else {
//   greetUser += " young";
// }
const greetUser = `${user.name} is ${user.age > 18 ? "old" : "young"}`;

// Implement with out operators
function ternary(condition, valueForTrue, valueForFalse) {
  if (condition) {
    return valueForTrue;
  } else {
    return valueForFalse;
  }
}

x = ternary(x, x + 1, 1);
