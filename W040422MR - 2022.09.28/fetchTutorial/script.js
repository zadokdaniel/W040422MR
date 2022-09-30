fetch(
  "http://domain:port/path?queryParameter=value&anotherQueryParameter=value",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "askdfjsdfKDJFKDJSFskfjsdkfj555",
    },
    body: JSON.stringify({
      someObject: "can be from any type of expression",
      a: 5,
      b: null,
    }),
  }
).then((response) => {
  response.status; // the status from server e.g. 200
  response.statusText; // the status code textual representation
  response.ok; // true only for statuses in range 200-299
  response.headers; // object with the response headers

  // use only one and once on each response
  response.text(); // a promise resolving with the body data as text
  response.json(); // a promise resolving with the body data as object from json
});

// using PROMISE Option 1
fetch("https://restcountries.com/v3.1/all?fields=name").then((response) => {
  console.log(response);

  response.json().then((body) => {
    console.log(body);
  });
});

// using PROMISE Option 2
fetch("https://restcountries.com/v3.1/all?fields=name")
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((body) => {
    console.log(body);
  });

// using PROMISE Option 3
fetch("https://restcountries.com/v3.1/all?fields=name").then(
  async (response) => {
    console.log(response);

    const body = await response.json();
    console.log(body);
  }
);
