'use strict';

var socketioEmitter = require('socket.io-emitter');

var emitter = socketioEmitter({
  host: '127.0.0.1',
  port: 6379
});

setInterval(function() {
  emitter.emit('send random value', {
    value: Math.random()
  });
}, 1000);
