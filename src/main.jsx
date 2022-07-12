import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
