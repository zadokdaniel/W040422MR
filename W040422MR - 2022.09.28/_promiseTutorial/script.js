// const myP = Promise.resolve("a");

const myP = new Promise((resolve) => resolve("a"));

myP
  .then((resolveA) => {
    console.log(resolveA);
    return "b";
  })
  .then((resolveB) => {
    console.log(resolveB);
    throw "c";
  })
  .then((resolveC) => {
    console.log(resolveC);
    return "d";
  })
  .catch((error) => console.log("error", error));

function wait(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), mili);
  });
}

wait(2000).then(() => {
  console.log(1);

  wait(4000).then(() => {
    console.log(2);
  });
});

wait(2000)
  .then(() => {
    console.log(1);
    return wait(4000);
  })
  .then(() => {
    console.log(2);
  });

wait(2000)
  .then(() => {
    if (Math.random() > 0.5) {
      return "dskfjsdjf";
    }

    throw "rdd";
  })
  .then((resolveData) => {
    wait().then();
    wait().then();
    wait().then();
  })
  .catch(() => {});

const myAsync = async () => {
  return "myAsync";
};

async function s() {
  await wait(2000);
  const theHelloValueWhichThePromiseResolvedWith = await wait(2000).then(
    () => "hello"
  );
  await myAsync();

  await "dskdj";
  return "a";
}

console.log(s());

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
