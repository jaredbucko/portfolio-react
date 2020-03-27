import React from "react";
import "./style.css";

function ProjectCard() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
            <img src="" className="card-img-top" alt="Pass the Remote"></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.google.com" className="btn btn-primary">Launch</a>
                <a href="https://www.google.com" className="btn btn-primary">GitHub</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  