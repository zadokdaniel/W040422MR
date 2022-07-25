// open as file (without live share)

debugger;

console.log("call stack example");

a();

function a() {
  console.log("a start");
  b();
  console.log("a end");
}

function b() {
  console.log("b start");

  c();
  e();

  console.log("b end");
}

function c() {
  console.log("c start");
  d();
  console.log("c end");
}

function d() {
  console.log("d start");

  //   let a = undefined;
  //   a.a.b.c;

  console.log("d end");
}

function e() {
  console.log("e start");
  console.log("e end");
}


