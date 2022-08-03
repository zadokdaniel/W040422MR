const welcome = document.getElementById("welcome");
const redSquares = document.querySelectorAll(".red-square");

function sayHi() {
  welcome.innerHTML = "Hi, some time had passed";
}

const position = {
  x: 0,
  y: 0,
};

function moveRedSquares() {
  for (const square of redSquares) {
    square.style.top = position.y + "px";
    square.style.left = position.x + "px";
  }

  position.x += 10;
  position.y += 10;
}

setTimeout(sayHi, 20000);
setInterval(moveRedSquares, 2000);
