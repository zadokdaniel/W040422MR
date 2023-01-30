const express = require("express");

const messagesModel = require("./db/messagesModel");

const app = express();

app.use(require("morgan")("dev"));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("works");
});

app.post("/messages", (req, res) => {
  // validate user input
  const { from, to, message } = req.body;

  if (
    !from ||
    from.length < 2 ||
    from.length > 30 ||
    !to ||
    to.length < 2 ||
    to.length > 30 ||
    !message ||
    message.length < 2 ||
    message.length > 200
  ) {
    res.status(400).send("from 2-30, to 2-30, message 2-200");
    return;
  }

  // validate system requirements
  // process
  messagesModel.add(from, to, message, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
      return;
    }

    res.send({
      id: result.insertId,
    });
  });

  // response
});

app.get("/messages", (req, res) => {
  const { from, to, date } = req.query;

  const cb = (err, result) => {
    if (err) {
      res.status(500).send("internal server error");
      return;
    }

    res.send(result);
  };

  if (from) {
    messagesModel.getByFrom(from, cb);

    return;
  }

  if (to) {
    messagesModel.getByTo(to, cb);

    return;
  }

  if (date) {
    messagesModel.getByDate(date, cb);

    return;
  }

  messagesModel.getAll(cb);
});

app.get("/inbox", (req, res) => {
  messagesModel.getInbox((err, result) => {
    if (err) {
      res.status(500).send("internal server error");
      return;
    }

    res.send(result);
  });
});

app.delete("/messages", (req, res) => {
  const { to } = req.query;

  if (!to) {
    res.status(400).send('"to" query parameter is required');
    return;
  }

  messagesModel.deleteToInbox(to, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("internal server error");
      return;
    }

    res.send({
      deleted: result.affectedRows,
    });
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
