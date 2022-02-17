import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import CardGridCopy from "../components/CardGridCopy";

function Landing() {
  return (
   
    <div>
     
      <Navbar />
      <div  class="spaces-filter-city">
        <label>Filtra por ciudades</label>
        <input
            type="text"
            placeholder="¿En qué ciudad buscas tu espacio coder?"/>
      </div>
      
      <CardGridCopy />
      <Footer />
    </div>
  );
}

export default Landing;
