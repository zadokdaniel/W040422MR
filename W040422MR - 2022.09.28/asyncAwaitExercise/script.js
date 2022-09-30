function wait(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), mili);
  });
}

function flipACoin() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber > 0.6) {
      resolve("heads");
    } else if (randomNumber > 0.2) {
      resolve("tails");
    } else {
      reject("anomaly happened");
    }
  });
}
//************************** */

// the five flips run at the same time
// function flipACoinFiveTimesA() {
//   for (let i = 0; i < 5; i++) {
//     wait(3000)
//       .then(() => flipACoin())
//       .then((result) => console.log(result))
//       .catch((result) => console.log("error", result));
//   }
// }
// flipACoinFiveTimesA();

// run one after the other
async function flipACoinFiveTimes() {
  //   console.log("run");

  for (let i = 0; i < 5; i++) {
    try {
      await wait(3000);
      console.log(await flipACoin());
    } catch (error) {
      console.log("error", error);
    }
  }
}

flipACoinFiveTimes().then(() => console.log("finished"));
// same as previous line
// async function runflip() {
//   await flipACoinFiveTimes();
//   console.log("finished");
// }
// runflip()
