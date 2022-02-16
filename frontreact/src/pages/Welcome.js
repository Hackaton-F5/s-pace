import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
      <div>
        <h1>S'paces</h1>
        <div className="btn">
          <Link className="btn btn-success btn-lg" role="button" to="Landing">
            Find your space
          </Link>
          <Link className="btn btn-success btn-lg" role="button" to="Landing">
            Publish your space
          </Link>
        </div>
      </div>
  );
}
