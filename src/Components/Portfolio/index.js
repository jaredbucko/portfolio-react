import React from "react";
import ProjectCard from "../Project Card";
import "./style.css";

function Portfolio() {
    return (
      <div>
          <h2 className="text-center mt-4 mb-4">Portfolio</h2>
          <div className="d-flex justify-content-center">
            <ProjectCard />
          </div>
      </div>
    );
  }
  
  export default Portfolio;
 