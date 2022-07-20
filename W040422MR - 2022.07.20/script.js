function whileExample1() {
  let i = 0;

  while (i < 100) {
    console.log(i);
    i += 5;
  }

  console.log("after while");
}

function whileExample2() {
  let userInput = prompt("what is the password?");
  //   console.log(userInput);

  while (userInput !== "123456") {
    alert("you shall not pass!!");
    userInput = prompt("what is the password?");
    // console.log(userInput);
  }

  alert("open sesame");
}

function doWhileExample1() {
  let i = 50;
  do {
    console.log(i);
  } while (i > 100);
}

function doWhileExample2() {
  let userInput = "";

  do {
    userInput = prompt("what is the password");

    if (userInput !== "123456") {
      alert("you shall not pass");
    }
  } while (userInput !== "123456");

  alert("open sesame");
}

function forExample1() {
  // for(
  //     /* only once before the for starts */;
  //     /* before each iteration if true does the iteration */;
  //     /* after each iteration */) {
  //         // code
  // }

  //   let i = 100;
  //   while (i > 0) {
  //     console.log(i);
  //     i -= 20;
  //   }

  for (let i = 100; i > 0; i -= 20) {
    console.log(i);
  }
}

function printAllCharactersBetween(from, to) {
  for (let i = from.charCodeAt(0); i <= to.charCodeAt(0); i += 1) {
    console.log(i, String.fromCharCode(i));
  }
}

function forExample2() {
  printAllCharactersBetween("A", "D");
  printAllCharactersBetween("a", "z");
  printAllCharactersBetween("0", "9");
  printAllCharactersBetween("א", "ת");
}

function forInExample1() {
  const obj = {
    a: 5,
    b: 6,
    c: 7,
    otherObject: {
      d: 5,
    },
  };

  //   const keys = Object.keys(obj);
  //   console.log(keys);
  //   for (let i = 0; i < keys.length; i += 1) {
  //     const key = keys[i];
  //     console.log(i, key);
  //   }

  for (const key in obj) {
    console.log(key, "=>", obj[key]);
  }
}

function forInExample2() {
  const arr = ["a", "b", "c", "d", "e"];

  for (const key in arr) {
    console.log(key, "=>", obj[key]);
  }
}

function forOfExample1() {
  const arr = ["a", "b", "c", "d", "e"];

  //   for (let i = 0; i < arr.length; i += 1) {
  //     const value = arr[i];
  //     console.log(i, value);
  //   }

  for (const value of arr) {
    console.log(value);
  }
}

function forOfExample2() {
  const users = [
    {
      name: "daniel",
      age: 27,
    },
    {
      name: "shalom",
      age: 45,
    },
    {
      name: "metushelach",
      age: 950,
    },
  ];

  for (const user of users) {
    console.log(user);
    console.log(user.name + " (" + user.age + ")");
  }
}
