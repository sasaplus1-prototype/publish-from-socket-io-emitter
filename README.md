# publish-from-socket-io-emitter

publish from [Socket.IO-emitter](https://github.com/socketio/socket.io-emitter)

## Setup

install dependencies.

```sh
$ npm install
```

start [Redis](http://redis.io/) server.

```sh
$ redis-server
```

start server with other terminal session.

```sh
$ npm start
```

start emitter with other terminal session.

```sh
$ node emitter.js
```

open `http://127.0.0.1:3000/` with the browser.

## Libraries

- [EJS](https://github.com/mde/ejs/)
- [Express](http://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Socket.IO-emitter](https://github.com/socketio/socket.io-emitter)
- [Socket.IO-redis](https://github.com/socketio/socket.io-redis)

## License

The MIT license. Please see LICENSE file.
