const oneLinerJoke = require("one-liner-joke");
const chalk = require("chalk");
const cowsay = require("cowsay");

const joke = chalk.blue(oneLinerJoke.getRandomJoke().body);
const cowSayingJoke = cowsay.say({ text: joke ,});
console.log(cowSayingJoke);
