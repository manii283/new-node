const fs = require('fs');

//create file

// fs.writeFile('read.txt', 'today is awesome day', (err) => {
//   console.log('file is create');
//   console.log(err);
// });


// ------------------------------------

// append file ( add data)
// fs.appendFile('read.txt', 'manishaaaaaaaaaaaaaaaaaa', (err) => {
//     console.log('tast complete');
// });

// ------------------------------------

//read data 
fs.readFile('read.txt','utf-8', (err, data) => {
    console.log(data);
} )


