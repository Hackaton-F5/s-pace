import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Welcome from "./pages/Welcome";
import Landing from "./pages/Landing";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
