import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      
      <div className="btn">
      <Link className="btn btn-success btn-lg" role="button" to="Landing">
        Find your space
      </Link>

      <button>Publish your space</button>
    </div>
  );
}
