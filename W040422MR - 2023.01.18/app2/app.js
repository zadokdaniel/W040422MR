const path = require("path");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/a/b/script.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/script.js"));
});

app.all("*", (req, res) => {
  res.status(404).send("404");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
