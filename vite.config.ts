import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src/client", // React의 루트 경로
  build: {
    outDir: "../../dist/client", // 빌드 결과물 경로
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // @를 src 경로로 매핑
    },
  },
});
