const http = require("http");
const path = require("path");

const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

io.on("connection", (socket) => {
  console.log("new socket");

  socket.on("chat message", (msg) => {
    console.log(msg);

    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("socket ended");
  });
});

server.listen(3000, () => console.log("server working"));
