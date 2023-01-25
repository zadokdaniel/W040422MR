const express = require("express");

const { engine } = require("express-handlebars");
const morgan = require("morgan");

const app = express();

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home", {
    myText: "hello",
  });
  res.render();
});

app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

