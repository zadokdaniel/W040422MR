const contentA = document.getElementById("content-a");
const contentB = document.getElementById("content-b");

setTimeout(function () {
  contentA.innerHTML += "hello,";

  setTimeout(function () {
    contentA.innerHTML += " it is me";

    setTimeout(function () {
      contentA.innerHTML += " the";

      setTimeout(() => {
        contentA.innerHTML += " master";

        setTimeout(function () {
          contentA.innerHTML += " of async";
        }, 2000);
      }, 2000);
    }, 3000);

    setTimeout(function () {
      contentB.innerHTML += "saying";

      setTimeout(function () {
        contentB.innerHTML += " and bye";
      }, 5000);
    }, 1000);
  }, 4000);
}, 0);

function sleep(milliseconds) {
  let start = new Date().getTime();
  let isFinished = false;
  while (!isFinished) {
    if (new Date().getTime() - start > milliseconds) isFinished = true;
  }
}

// BAD
// setTimeout(function () {
//   contentA.innerHTML += "hello";
// }, 0);
// setTimeout(function () {
//   contentA.innerHTML += " it is me";
// }, 4000);
// setTimeout(function () {
//   contentA.innerHTML += " the";
// }, 7000);
// setTimeout(function () {
//   contentA.innerHTML += " master";
// }, 9000);
// setTimeout(function () {
//   contentA.innerHTML += " of async";
// }, 11000);
