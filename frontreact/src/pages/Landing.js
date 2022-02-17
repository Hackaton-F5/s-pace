import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import CardGridCopy from "../components/CardGridCopy";

function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Navbar />
      <CardGridCopy />
      <Footer />
    </div>
  );
}

export default Landing;
