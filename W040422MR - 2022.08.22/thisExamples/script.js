// "use strict";

function fn(/* this, */ a, b, c) {
  console.log(this);
  console.log(a, b, c);
  this.myNewKey =
    "hello this is a new key which will change the object in this (because it is an object and objects are passed by reference)";
}

fn(/* window,*/ 2, 3, 4);

const obj = {
  a: "hello",
  b: 25,
  fn, // fn: fn
};

obj.fn(/* obj,*/ 2, 3, 4);

new fn(/* {},*/ 2, 3, 4);

// Exercise

function a() {}

function fill(arr, fill, start, end) {}

const myArray = [1, 2, 3, 45, 5, 76, 67];
myArray.fill(/* myArray */ "t");

const myArray2 = [1, 2, 3, 45, 5, 76, 67];
myArray2.fill(/*myArray2 */ "5");

new Array();

function a(/*this */) {
  console.log(this);

  function b(/*this */) {
    console.log(this);
  }

  b(/* window */); // 1

  new b(/* {} */); // 2
}

let myObj = {
  description: "myObjProperty",
  someFn: a,
};

myObj.someFn(/* myObj */); // 3
