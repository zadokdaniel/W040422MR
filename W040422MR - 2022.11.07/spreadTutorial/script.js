const user = {
  name: "daniel",
  age: 28,
  address: {
    city: "holon",
    street: "sokolov",
    number: 44,
  },
};

// shallow copy
let userCopy = {
  a: 5,
  name: "shalom",
  ...user,
  //   name: user.name,
  //   age: user.age,
  //   address: user.address,
};

console.log(userCopy === user);
console.log(userCopy.address === user.address);

// userCopy.address.city = "tlv";

console.log(userCopy, user);

// deep copy
let userCopy1 = {
  ...user,
  // name: user.name,       P
  // age: user.age,         P
  // address: user.address  R
  address: {
    ...user.address,
    // city: user.address.city,     P
    // street: user.address.street, P
    // number: user.address.number  P
    city: "tlv",
  },
};

console.log(user === userCopy1);
console.log(user.address === userCopy1.address);
console.log(userCopy1, user);

// function spread
let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];

let c = [1, ...a, 5, ...b];
// let c = [1, a[0], a[1], a[2], a[3], 5, b[0], b[1], b[2], b[3]];

fn(0, ...a, true, ...b);
fn(0, a[0], a[1], a[2], a[3], true, b[0], b[1], b[2], b[3]);
