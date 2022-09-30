const express = require("express");

const app = express();
app.use(express.json());

app.all("*", (req, res) => console.log(req.body));

app.listen(3000);
