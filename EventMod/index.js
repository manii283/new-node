const EventEmitter = require('events');
const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log('manisha')
// })

// event.on('sayMyName', () => {
//     console.log('aditya')
// })

// event.on('sayMyName', () => {
//     console.log('vidhisha')
// })

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit('checkPage', 200, 'ok');