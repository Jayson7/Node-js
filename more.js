// // var http = require('http');
// // var events = require('events');

// // var eventEmitter = new events.EventEmitter();

// // var server = http.createServer(function(req, res) {
// //     eventEmitter.emit('we have a visitor', 'TEST');
// //     res.end("You are here");

// // });

// // eventEmitter.on('we have a visitor', function(data) {
// //     console.log('there is a visitor sir', data);
// // });

// // server.listen(3000, 'localhost', function() {
// //     console.log('server started on port: 3000');
// // });
// var express = require('express'); // import express js
// var app = express(); // declared it ass app
// var events = require('events'); // import events
// var fs = require('fs'); // import fs module 


// var eventEmitter = new events.EventEmitter(); // reinstating eventsEmitter function
// var http = require('http'); // bringing along http module in other to correct GET /
// var server = http.createServer(app) // i am going to create server using node and express, remember app from express()

// app.get('/', function(req, res) { // watchout
//     eventEmitter.emit('we have a visitor at page 1'); // eventEmitter begins
//     res.send('Page one'); // the first page is ready 
// });
// app.get('/tasks', function(req, res) {// watchout for the second magic of the minute
//     fs.readFile('./more.json', function(err, data) { // making use of an external json file
//         if (!err) {
//             var tasks = JSON.parse(data.toString()).tasks;
//             res.json(tasks);
//         }
//     });// boooom
// })

// eventEmitter.on('we have a visitor at page 1', function(data) {
//     console.log('there is a visitor sir at page 1');
// });

// app.listen(3000, 'localhost', function() {
//     console.log("server is listening on port: 3000");
// });


var fs = require('fs');
fs.open('./writer.js', function(err, data) {
    if (!err) {
        console.log(data);
    }
})