import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPages() {
  return (
    <Card>
      <div className="about"></div>
      <h1>About This Project</h1>
      <p>This is React app to leave your Goal</p>
      <p>version:1.0.0</p>

      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPages;
