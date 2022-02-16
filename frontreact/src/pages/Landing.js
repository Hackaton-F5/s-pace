import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Navbar />
      <CardGrid />
      <Footer />
    </div>
  );
}

export default Landing;
