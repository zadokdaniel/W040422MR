const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1/W040422MR_my_rest_api")
  .then(() => console.log("connected to mongoDB"))
  .catch(() => console.log("could not connect to mongoDB"));

const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
