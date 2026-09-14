import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import HeaderPage from "./pages/HeaderPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 20, display: "flex", gap: 15 }}>
        <Link to="/">Home</Link>
        <Link to="/button">Button Page</Link>
        <Link to="/header">Header Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/header" element={<HeaderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
