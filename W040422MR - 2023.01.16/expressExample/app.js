const express = require("express");
const path = require("node:path");

const app = express();

// try this http://localhost:3000/home?a=555&b=dksfjs&c=hello&c=bye
app.get(["/home", "/"], (req, res) => {
  console.table([
    ["method", req.method],
    ["url", req.url],
    ["path", req.path],
    ["query", JSON.stringify(req.query)],
    ["headers", req.headers],
    ["header()", req.header("accept-language")],
  ]);

  res.status(201);
  res.write("hello");
  res.end();

  // set headers
  //   res.set("my-header", "some value");
  //   res.set({
  //     "Content-Type": "application/json",
  //     "my-site": "hello",
  //   });


  // configure Content-Type header
  //   res.type('.html')
  //   res.type('html')
  //   res.type('text/html')

  // set body
  //   res.write("text")
  //   res.end("optional text")
});

app.get("/json", (req, res) => {
  // res.send() // if argument is object uses res.json if string sets Content-Type: text/html, write, end
  res.json({ a: 5 }); // sets Content-Type: application/json. parses the object using JSON.stringify(), write and end
});

app.get("/html", (req, res) => {
  // if argument is object uses res.json if string sets Content-Type: text/html, write, end
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>HELLO</h1>
    </body>
  </html>
  `);
});

app.get("/redirect", (req, res) => {
  res.redirect("http://google.com"); // sets statusCode to 301 sets header Location: to argument passed. When the browser receives location header with 301 it will redirect the client to the specified location url
});

app.get("/image", (req, res) => {
  // will read the contents of the file, set Content-Type based on file .ext, will write the data and end
  res.sendFile(path.resolve(__dirname, "./public/a.png"));
});

app.get("/index.html", (req, res) => {
  // will read the contents of the file, set Content-Type based on file .ext, will write the data and end
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`port opened on port ${PORT}`));
