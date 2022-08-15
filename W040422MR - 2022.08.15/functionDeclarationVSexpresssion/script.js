// ******* anonymous function
// it doesn't make sense to create anonymous function with out passing it as argument or keeping it in a variable
// function () {};

// ******* function expression

//fn1(); // accessing the function through variable, variable rules apply. Uncaught ReferenceError: Cannot access 'fn1' before initialization

const fn1 = function () {
  console.log("fn1");
};

const fn2 = function theNameAsNoUse() {
  console.log("fn2");
};

document.createElement("div").addEventListener("click", function () {
  console.log("click happened");
});

document
  .createElement("div")
  .addEventListener("click", function theNameHasNoUse() {
    console.log("click happened");
  });

// ******* function declaration (hoisting)
// the function is created before running the scope's code

fn3();

function fn3() {
  console.log("fn3");
}

fn4();
fn4();
fn4();
fn4();

function fn4() {
  console.log("fn4");

  fn5();
  function fn5() {
    console.log("fn5");
  }
}

function myFn(abc) {
  abc(10);

  return 5;
}

myFn(function passedFunction(a) {
  console.log("passedFunction");
  return 9 * a;
});
