const EventEmitter = require('events');
const emitter = new EventEmitter();
// register listener
emitter.on('messageLogged', function() {
    console.log('listener called');
});

//raise the event
emitter.emit('messageLogged');