const num1Input = document.getElementById("num1");
const operationSelector = document.getElementById("operation");
const num2Input = document.getElementById("num2");
const resultContainer = document.getElementById("result");

const operations = {
  add: {
    operation: function (num1, num2) {
      return num1 + num2;
    },
    sign: "+",
  },
  sub: {
    operation: function (num1, num2) {
      return num1 - num2;
    },
    sign: "-",
  },
  multiply: {
    operation(num1, num2) {
      return num1 * num2;
    },
    // operation: function operation(num1, num2)...
    sign: "*",
  },
  power: {
    operation(num1, num2) {
      return num1 ** num2;
    },
    sign: "^",
  },
};

populateOperationsSelector();

function populateOperationsSelector() {
  let html = "";

  for (const operationName in operations) {
    html += `<option value="${operationName}">${operations[operationName].sign}</option>`;
  }

  operationSelector.innerHTML = html;
}

function calculate() {
  const num1Value = Number(num1Input.value);
  const num2Value = Number(num2Input.value);

  if (isNaN(num1Value) || isNaN(num2Value)) {
    return;
  }

  resultContainer.innerHTML = operations[operationSelector.value].operation(
    num1Value,
    num2Value
  );
}
