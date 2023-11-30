import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer({});

const io = new Server(httpServer, {
  path: '/ws',
});

io.on('connection', (socket) => {
  // ...
  console.log('hello');
});

httpServer.listen(4000);
