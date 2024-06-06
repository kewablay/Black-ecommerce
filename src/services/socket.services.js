import io from "socket.io-client";

const socketURL = import.meta.env.VITE_SOCKET_URL;

console.log("Socket url: ", socketURL)

const socket = io.connect(socketURL);

export default socket;
