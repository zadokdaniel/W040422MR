const a = 5;

{
  // console.log(fn1_a); //ReferenceError: Cannot access 'fn1_a' before initialization

  let fn1_a = 5;

  {
    console.log(fn1_a); // will work because this scope is in same scope and it had already been declared
  }

  {
    let fn1_a = 10; // will block access to the variable from the above scope

    console.log(fn1_a); // 10.
  }

  console.log(fn1_a) // 5
}

// console.log(fn1_a); //ReferenceError: fn1_a is not defined
