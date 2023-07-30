const path = require('path');

console.log(path.dirname('D:/manisha-program/new_node-js/PathModule/path.js')) ;

console.log(path.extname('D:/manisha-program/new_node-js/PathModule/path.js')) ;

console.log(path.basename('D:/manisha-program/new_node-js/PathModule/path.js')) ;

const myPath = path.parse('D:/manisha-program/new_node-js/PathModule/path.js');
console.log(myPath);