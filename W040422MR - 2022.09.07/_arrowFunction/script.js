/*
    - arrow function is always anonymous. thus it can only be used as expression
    - does not have "this" parameter
*/

const noArgs = () => {};
const oneArgExactly1 = (arg1) => {};
const oneArgExactly2 = (arg1) => {};
const moreThanOneArg = (arg1, arg2, arg3) => {};

const withCodeBlock = () => {
  console.log("some code to do");
  if (true) {
    console.log("some other code");
  }

  return "the value to return";
};

const automaticReturn = (name) => "hello, " + name;
// const automaticReturn = (name) => {
//   return "hello, " + name;
// };

const addition = (x, y) => x + y;
// const addition = (x, y) => {
//   return x + y;
// };
console.log(addition(5, 3));

// add
const add = (num1, num2) => num1 + num2;
// substract
const sub = (num1, num2) => num1 - num2;
// multiply
const multiply = (num1, num2) => num1 * num2;
// power
const power = (num1, num2) => num1 ** num2;
const power2 = (num1) => power(num1, 2);

// greet - receives a name and adds "welcome," to it
const greet = (name) => `Welcome, ${name}`;

console.log(add(5, 2));
console.log(sub(5, 2));
console.log(multiply(5, 2));
console.log(power(5, 2));
console.log(greet("daniel"));

/** no THIS */

function fn4(/* this */) {}

fn4(/* window/undefined */);
let obj = {
  fn4,
};
obj.fn4(/* obj */);
new fn4(/* { [[prototype]]: fn4.prototype } */);

function a(/* this */) {
  const aaa = () => {
    console.log(this);
  };
}

function thisTest1(/* this */) {
  console.log(3, this); // window / undefined

  function a(/* this */) {
    console.log(4, this); // { [[prototype]]: a.prototype }

    const arrow1 = () => {
      console.log(5, this); // { [[prototype]]: a.prototype }
    };
    arrow1();
  }
  new a(/* { [[prototype]]: a.prototype } */);

  const arrow2 = () => {
    console.log(6, this); // window / undefined
  };
  arrow2();
}

const thisTestObj = {
  myFn(/* this */) {
    console.log(2, this); // thisTestObj
    thisTest1(/* window / undefined */);
  },
};

console.log(1, this); // window
thisTestObj.myFn(/* thisTestObj */);

// TEST 2

function bbbb(/* this */) {
  console.log(1, this);

  function cccc(/* this */) {
    console.log(2, this);

    function eeee(/* this */) {
      console.log(3, this);

      const arrow = () => {
        console.log(4, this);
      };

      arrow();
    }
    eeee();
  }

  const arrow = () => {
    console.log(5, this);
  };

  function ddd(/* this */) {
    console.log(6, this);
  }

  let obj = {
    myFn: cccc,
  };
  obj.myFn();

  cccc();
  arrow();
  ddd();
}

new bbbb(); 
