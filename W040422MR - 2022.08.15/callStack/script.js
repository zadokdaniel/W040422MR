function a() {
  b();
}

function b() {
  c();
}

function c() {
  d();
}

document.body.addEventListener("click", a);

function d() {
  console.log("d");
}

a();
