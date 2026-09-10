import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));
const RemoteHeader = React.lazy(() => import("remoteApp/Header"));

function HomePage() {
  return <h2>Home Page (Host App)</h2>;
}

function ButtonPage() {
  return (
    <Suspense fallback={<p>Loading button...</p>}>
      <RemoteButton />
    </Suspense>
  );
}

function HeaderPage() {
  return (
    <Suspense fallback={<p>Loading header...</p>}>
      <RemoteHeader />
    </Suspense>
  );
}

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
