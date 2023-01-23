const express = require("express");

const morgan = require("morgan");
const path = require("path");

const contactUsController = require("./controllers/contactUs");
const auth = require("./middleware/auth");

const app = express();

app.use(morgan("dev"));
app.use("/static", express.static(path.resolve(__dirname, "./public")));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contactUs", (req, res) => {
  try {
    contactUsController.addContactInfo(req.body);
    res.redirect("/static/thank-you.html");
  } catch (e) {
    res.json(e);
  }
});

app.get("/contactUs", auth("12345"), (req, res) => {
  res.json(contactUsController.getAll());
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
