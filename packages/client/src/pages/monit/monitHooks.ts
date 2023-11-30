import { useEffect } from 'react';
import { Manager, Socket } from 'socket.io-client';
import {
  SocketClientToServerEvents,
  SocketServerToClientEvents,
} from '@admin/types';

const url = window.location.hostname + `:${import.meta.env.VITE_SERVER_PORT}`;

const manager = new Manager(url, {
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 300,
});

const socket: Socket<SocketClientToServerEvents, SocketServerToClientEvents> =
  manager.socket('/ws');

console.log(url);

export const useSocket = () => {
  useEffect(() => {
    function onConnect() {
      console.log('connect');
    }
    function onDisconnect() {
      console.log('disconnect');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);
};
