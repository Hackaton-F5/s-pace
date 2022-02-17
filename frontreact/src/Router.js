import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Welcome from "./pages/Welcome";
import Landing from "./pages/Landing";
import Form from "./components/Form";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
