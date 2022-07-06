console.log(globalThis);
console.log(window);
console.log(window === globalThis);

let a;
console.log(a);
a = 5;
console.log(a);
a = 8;
console.log(a);

let obj = {
  name: "daniel",
  age: 27,
  address: {
    city: "tlv",
    street: "rotchild",
  },
};

console.log(obj.name);
console.log(obj["name"]);
console.log(obj.address.city);
console.log(obj["address"]);

console.log(window);
console.log(window.document);
console.log(window.document.getElementById);

let myElement = window.document.getElementById("hello");
console.dir(myElement);
myElement.innerHTML = "<h1>hello</h1>";

console.log({
  width: (99 * 8) / 3 - 6,
});
