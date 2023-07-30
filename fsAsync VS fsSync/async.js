const fs = require('fs');

//data read using sync
// const data = fs.readFileSync('read.txt', 'utf-8');
// console.log(data);
// console.log('after the data');

// -------------------------------------------------- //
//data read usinf Asyn
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});

console.log('after teh data');
