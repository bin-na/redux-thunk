import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { history } from "../helpers";
import { Home, Same } from "../Pages";
import Login from "../pages/login";
import Register from "../pages/register";
import "./app.css";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/same" element={<Same />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
