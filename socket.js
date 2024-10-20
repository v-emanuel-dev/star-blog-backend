const { Server } = require('socket.io');

let io; // Variável global para a instância do Socket.io

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "https://star-blog-frontend-git-main-vemanueldevs-projects.vercel.app", // URL do frontend
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
};

const getSocket = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

module.exports = {
  initSocket,
  getSocket,
};
