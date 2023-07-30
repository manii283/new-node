const fs = require('fs');
const { json } = require('stream/consumers');

const bioData = {
    name: "manisha nayak",
    age: 25

};

console.log(bioData.age);

//convert to json 
const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

//data add to another file
fs.writeFile('json1.json', jsonData, (err) => {
    console.log('done')
})

//read data gron another file
fs.readFile('json1.json', 'utf-8', (err, data) => {
    console.log(data,'read data')
    //conver data in object
    const orgData = JSON.parse(data);
    console.log(orgData)
} )

const objData = JSON.parse(jsonData)
console.log(objData);
console.log(objData.name)