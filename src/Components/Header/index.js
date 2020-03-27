import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
      <div className="mb-4">
        <div>
          <h2 className="text-center mt-5 m-4" id="title">Jared Bucko</h2>
        </div>
        <ul className="nav justify-content-center">
          <li>
            <h4 className="nav-item mt-4 ml-3 mr-3">About</h4>
          </li>
          <li>
            <h4 className="nav-item mt-4 ml-3 mr-3">Portfolio</h4>
          </li>
          <li>
            <h4 className="nav-item mt-4 ml-3 mr-3">Contact</h4>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  