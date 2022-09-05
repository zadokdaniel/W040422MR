let age: number;

const name1: string = "daniel";

function fn(a: number, b: string): string {
  //   return "string";
  return a + b;
}

let arr = [4, 34, 43, 43];
let a = 5 + 8 + name1 + 44;

fn(55, a);

const fn1 = (a: number, b?: string): string => a + b;

fn1(5);

// (document.getElementById("aaa") as HTMLInputElement).value;
// document.getElementById("").addEventListener("click", (e) => {
//   (e.target as HTMLImageElement).src;
// });

class User {
  name: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
  };
}

const a12: {
  name: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
  };
} = {
  name: "hello",
  age: 44,
};
const a11 = new User();
a11.name = 555;
a11.age = "kdsfj";
a11.address;
