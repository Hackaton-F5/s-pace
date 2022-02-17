import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Welcome from "./pages/Welcome";
import Landing from "./pages/Landing";
import AddSpaceForm from "./components/AddSpaceForm";
import Display from "./pages/Display";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/form" element={<AddSpaceForm />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
