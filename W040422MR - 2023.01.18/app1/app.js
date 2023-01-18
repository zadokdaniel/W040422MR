// console.log(process.argv);

const numbers = process.argv.splice(3).map(Number);
const operator = process.argv[2];

if (!["+", "-"].includes(operator)) {
  throw new Error("must input a valid math operator");
}

if (typeof numbers.find(isNaN) === "number") {
  throw new Error("please insert only numbers");
}

switch (operator) {
  case "+":
    console.log(
      numbers.splice(1).reduce((acc, curr) => acc + curr, numbers[0])
    );
    break;
  case "-":
    console.log(
      numbers.splice(1).reduce((acc, curr) => acc - curr, numbers[0])
    );
    break;
}
