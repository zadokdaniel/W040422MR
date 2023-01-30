const connection = require("./connections");

const add = (from, to, message, cb) => {
  connection.query(
    "INSERT INTO messages (`from`, `to`, message) VALUES (?, ?, ?)",
    [from, to, message],
    cb
  );
};
// const add = (from, to, message, cb) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "INSERT INTO messages (`from`, `to`, message) VALUES (?, ?, ?)",
//       [from, to, message],
//       (err, result) => {
//         if (err) {
//           reject(err);
//           return;
//         }

//         resolve(result);
//       }
//     );
//   });
// };

// add("", "", "", (err, result) => {});
// add("", "", "")
//   .then((result) => {})
//   .catch((err) => {});

const getByFrom = (from, cb) => {
  connection.query("SELECT * FROM messages WHERE `from`=?", [from], cb);
};

const getByTo = (to, cb) => {
  connection.query("SELECT * FROM messages WHERE `to`=?", [to], cb);
};

const getByDate = (date, cb) => {
  connection.query(
    "SELECT * FROM messages WHERE DATE(created_at) = ?",
    [date],
    cb
  );
};

const getAll = (cb) => {
  connection.query("SELECT * FROM messages", cb);
};

const getInbox = (cb) => {
  connection.query(
    "SELECT `to`, COUNT(id) AS amount FROM messages GROUP BY `to`",
    cb
  );
};

const deleteToInbox = (name, cb) => {
  connection.query("DELETE FROM messages WHERE `to` = ?", [name], cb);
};

module.exports = {
  add,
  getByDate,
  getByFrom,
  getByTo,
  getAll,
  getInbox,
  deleteToInbox,
};
