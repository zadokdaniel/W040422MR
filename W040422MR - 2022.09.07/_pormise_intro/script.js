// const successCallBack = (geoLocationData) => {
//   console.log("success", geoLocationData);
// };

// const errorCallBack = (err) => {
//   console.log("error", err);
// };

// navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);

function getCurrentPosition() {
  const executor = (resolve, reject) => {
    const successCallBack = (geoLocationData) => {
      resolve(geoLocationData);
    };

    const errorCallBack = (err) => {
      reject(err);
    };

    // navigator.geolocation.getCurrentPosition(resolve, reject) ; // same as next line (even simpler 😉)
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  };

  return new Promise(executor);
}

getCurrentPosition()
  .then((data) => {
    alert("I know where you are at");

    console.log(data);
  })
  .catch((err) => {
    alert("You are very good at hiding");

    console.log(err);
  });
