const fs = require('fs');

//make folder
// fs.mkdirSync('manisha');

//--------------------------------------

//create file
// fs.writeFileSync('manisha/bio.txt', 'my name is manisha');

//--------------------------------------

//addend data (added extra data)
// fs.appendFileSync('manisha/bio.txt', ' hello everyone');

//--------------------------------------

//read file data
// const data = fs.readFileSync('manisha/bio.txt', 'utf8');  
// console.log(data);

//--------------------------------------

// rename file
// fs.renameSync('manisha/bio.txt', 'manisha/myBio.txt')


//--------------------------------------

// delete file
// fs.unlinkSync('manisha/myBio.txt')

//--------------------------------------

//remove folder
fs.rmdirSync('manisha');