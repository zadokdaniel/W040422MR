let a: (a: number, b: number) => () => string;

a = (a: number, b: number) => {
  return () => "aa";
};

let e = (a: number, b: number) => {
  return () => "aaa";
};

// let b: Array<Array<string>> = [];
let b: string[][][] = [["dfdf"], [5], [["dslkfjs", "sdkjf"]]];
b.push([["sd"]]);

let c;

let d: { name: string; age: number; email: string };

d = {
  name: "sds",
  age: 5,
  email: "dskj",
};

class User {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

interface UserI {
  name: string;
  age: number;
  email: string;
}

d = new User("daniel", 55, "dsfak@dsfksdjfa.com");

let g: UserI;

g = d;
g = {
  name: "danile",
  age: 55,
  email: "sdkljsd@kfjds",
};
g = new User("danile", 55, "dskjsdk");

let z: Array<string | number>;

interface SomeObjectKeepingAValue<T> {
  value: T;
}

let x1: SomeObjectKeepingAValue<string> = {
  value: "string only",
};
let x2: SomeObjectKeepingAValue<User> = {
  value: {
    name: "must be of type user",
    age: 55,
    email: "dskfjsd",
  },
};
