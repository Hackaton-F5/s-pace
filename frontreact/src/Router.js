import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Welcome from "./pages/Welcome";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
