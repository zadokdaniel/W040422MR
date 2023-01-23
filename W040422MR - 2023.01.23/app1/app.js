const path = require("path");
const morgan = require("morgan");

const express = require("express");

const app = express();

const auth = (req, res, next) => {
  if (req.query.user === "daniel") {
    next();
    return;
  }

  res.status(401).send("unauthorized");
};

app.use(morgan("dev"));
app.use("/static", express.static(path.resolve(__dirname, "./public")));

app.use(express.json()); // application/json
app.use(express.text()); // text/plain
app.use(express.urlencoded()); // www-form-urlencoded this kind of body comes from forms

app.post("/testJSON", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>req.body.a is: ${req.body.a}</body>
  </html>`);
});

app.use("/a/b", auth, (req, res, next) => {
  next();
});

app.get("/a/b/test", auth, (req, res, next) => {
  if (req.query.hello === "hello") {
    res.send("test works");
    return;
  }

  next();
});

app.post("/formTest", (req, res) => {
  console.log(req.body);
});

app.get("/home.html", (req, res) => {
  res.send("hello");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
