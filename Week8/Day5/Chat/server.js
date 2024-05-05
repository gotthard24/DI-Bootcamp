const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const router = require("./routes/chat_router");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

app.use(express.urlencoded({extended: true}));
app.use(router);

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
