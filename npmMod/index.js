// const chalk = require("chalk");

// console.log(chalk.blue.italic('Hello world!'));

var validator = require('validator');

const res = validator.isEmail('foo@bar.com'); //=> true

console.log(res);