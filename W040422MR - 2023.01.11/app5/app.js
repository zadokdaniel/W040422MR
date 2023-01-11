const freeMemPercentage = require("./memory");

setInterval(() => console.log(freeMemPercentage().toFixed(2) + "%"), 2000);
