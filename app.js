//event driven programming   
//used heavily in Node.js 

const EventEmitter = require('events');  //class 
const customEmitter = new EventEmitter   //instance of the EventEmitter class 

customEmitter.on('response', (name, id) => { 
    console.log(`data received ${name} with id ${id}`)
})    
customEmitter.on('response', () => { 
    console.log(`some other logic`)
})   
//passing in the name of the event, and then a callback function (what to do if the event occurs) 

customEmitter.emit('response', "john", 34) //console won't print 'data received' if we dont call this. "response" must be passed. 'r' wont work.