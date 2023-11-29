import { Manager } from 'socket.io-client';

const manager = new Manager(window.location.host, {
  reconnection: true,
  reconnectionDelay: 300,
});

const socket = manager.socket('/ws');
