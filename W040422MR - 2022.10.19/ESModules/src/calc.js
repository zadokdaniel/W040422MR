console.log("calc start");

export const PI = Math.PI;

export function add(a, b) {
  return a + b;
}

export const subtract = (a, b) => a - b;

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

// export default "ldksjsd"
// export default 55
// export default {a: 5}
export default {
  add,
  subtract,
  multiply,
  divide,
  PI,
};

console.log("calc end");
