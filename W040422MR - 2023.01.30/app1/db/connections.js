const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "172.30.160.1",
  user: "ubuntu",
  password: "",
  database: "imessage",
});

module.exports = connection;
