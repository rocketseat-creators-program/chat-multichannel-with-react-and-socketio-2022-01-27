import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
  },
});

import { Chat as ChatModel } from "./model/chat.js";

const chat = new ChatModel();

io.on("connection", (socket) => {
  socket.on("user:login", (userName) => {
    console.log(`${userName} logged in`);

    socket.emit("channels:get", chat.getChannels());
  });

  socket.on("channel:create", (name) => {
    chat.createChannel(name);

    io.emit("channels:get", chat.getChannels());
  });

  socket.on("channel:join", (channelId) => {
    socket.join(channelId);

    io.to(channelId).emit("channel:get", chat.getChannel(channelId));
  });

  socket.on("message:create", ({ channelId, userName, message }) => {
    chat.createdMessage(channelId, userName, message);

    io.to(channelId).emit("channel:get", chat.getChannel(channelId));
  });
});

const PORT = 3333;
io.listen(PORT);
console.log(`Server started on port ${PORT}`);
