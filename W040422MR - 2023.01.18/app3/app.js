const path = require("path");

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/home.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/about.html"));
});
app.get("/contactus", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/contact-us.html"));
});
app.get("/styles/style.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/styles/style.css"));
});
app.get("/scripts/script.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/scripts/script.js"));
});

app.all("*", (req, res) => {
  res
    .status(404)
    .sendFile(path.resolve(__dirname, "./public/pageNotFound.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
