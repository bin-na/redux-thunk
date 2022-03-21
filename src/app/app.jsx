import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { history } from "../helpers";
import { Home, Same } from "../Pages";

function App() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <BrowserRouter history={history}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/same" element={<Same />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export { App };
