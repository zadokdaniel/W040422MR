const os = require("node:os");

const freeMemPercentage = () => 100 - (os.freemem() / os.totalmem()) * 100;

module.exports = freeMemPercentage;
