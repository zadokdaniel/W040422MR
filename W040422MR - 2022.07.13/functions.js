function fn1(/* parameter */) {
  /* code */

  // a function CAN be set to return a value. if not set will return at the end of the block undefined
  // return ENDS the function. after return the function's code stops and is not being ran
  return "some value"; /* the value the function expresses */

  // return undefined // by js
}

fn1(/* argument */); // expresses the returned value from the function

function fn2(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}

fn2();
fn2(1, 2, 3, 4, 5);
fn2(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
fn2(1, 2, 3);

// // fn2(1, 2);
// {
//   let a = 1;
//   let b = 2;
//   console.log(a, b, c, d, e);
// }

// // fn2(2,3,45,5)
// {
//   let a = 2;
//   let b = 3;
//   let c = 45;
//   let d = 5;
//   let e;
//   console.log(a, b, c, d, e);
// }

function getUserName(user) {
  console.log(user);
  return user.name;
}

console.log(
  getUserName({
    name: "daniel",
  })
);
