const auth = (password) => {
  return (req, res, next) => {
    if (req.query.pass === password) {
      next();
      return;
    }

    res.status(401).send("unauthorized");
  };
};

module.exports = auth;
