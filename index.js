const fs = require('fs');

// fs.writeFileSync('read.txt', 'welcome to node js');       //create file and add contect

// -------------------------------------------------------

// fs.writeFileSync('read.txt', 'Hello, welcome to node js');      //override existing content

// -------------------------------------------------------

// fs.appendFileSync('read.txt', 'Hello, i am manisha');      //added extra data

// -------------------------------------------------------
const buf_data = fs.readFileSync('read.txt');      //read file data
console.log(buf_data);

//we get buffer data 
{/* <Buffer 48 65 6c 6c 6f 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 48 65 6c 6c 6f 2c 20 69 20 61 6d 20 6d 61 6e 69 73 68 61> */}
 

org_data = buf_data.toString()
console.log(org_data);

// -------------------------------------------------------

fs.renameSync('read.txt', 'readwrite.txt');