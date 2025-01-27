import Home from "../pages/Home";
import About from "../pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllChatPage } from "../pages/AllChat";
import { Header } from "../layout/main/header";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-chat" element={<AllChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}
