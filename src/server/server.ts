import express from "express";
import path from "path";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const PORT = 3000;
const server = createServer(app);
const io = new Server(server);

// JSON 파싱
app.use(express.json());

// API 라우트
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat", (value) => {
    socket.emit("foo", "메세지 수신" + value);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// React 정적 파일 서빙ㅌ
app.use(express.static(path.join(__dirname, "../client")));

// React Router를 위한 모든 경로 처리
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
