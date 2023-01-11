// (function(exports, require, module, __filename, __dirname)
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}

console.log("****CALC****");

console.log(__filename);
console.log(__dirname);
// console.log(module);

console.log("****CALC END****");

module.exports = {
  add,
  subtract,
  multiply,
};
// )
