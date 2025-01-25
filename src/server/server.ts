import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// JSON 파싱
app.use(express.json());

// API 라우트
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// React 정적 파일 서빙
app.use(express.static(path.join(__dirname, "../client")));

// React Router를 위한 모든 경로 처리
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
