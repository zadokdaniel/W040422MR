function sleep(milliseconds) {
  let start = new Date().getTime();
  let isFinished = false;
  while (!isFinished) {
    if (new Date().getTime() - start > milliseconds) isFinished = true;
  }
}

function takesTime() {
  for (let i = 0; i < 99999; i++) {
    console.log(i);
  }
}

function clickMe() {
  console.count("clickMeBtn");
}

function timeOut() {
  console.time("eventLoop");
  setTimeout(() => console.timeEnd("eventLoop"), 6000);
}

const second = 1000;
function onOtherClick() {
  console.time("sleep");
  sleep(10 * second);
  console.timeEnd("sleep");
}
