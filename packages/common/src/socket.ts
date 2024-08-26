import { io, Socket } from "socket.io-client";
import type { Result } from "./types/result";
import type { LoginInfo } from "./types/user";

export const SERVER_PORT = 3000;
export const SERVER_HOSTNAME = "localhost";
export const SERVER_URL = `http://${SERVER_HOSTNAME}:${SERVER_PORT}`;

export interface ServerToClientEvents {
  setup: () => void;
}

export interface ClientToServerEvents {
  login: (
    data: LoginInfo,
    callback: (data: Result<string | null>) => void
  ) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(SERVER_URL);
