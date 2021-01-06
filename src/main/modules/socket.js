const { Server } = require('socket.io');

export const createServer = (port) => {
  const io = new Server(port, {});
  console.log('process.env.WEBPACK_DEV_SERVER_URL', process.env.WEBPACK_DEV_SERVER_URL);
  console.log('create socket server', port);
  io.on('connection', (socket) => {
    console.log('connected', socket.id);
    socket.emit('hello', 'xiebiao', (data) => {
      console.log('ack', data);
    });
  });
};
