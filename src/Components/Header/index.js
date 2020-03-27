import React from "react";
// import { Link } from "react-router-dom";

function Header() {
    return (
      <div>
        <div>
          <h3 className="text-center mt-5 m-4">Jared Bucko</h3>
        </div>
        <ul className="nav justify-content-center">
          <li>
            <h5 className="nav-item mt-4 ml-5 mr-5">About</h5>
          </li>
          <li>
            <h5 className="nav-item mt-4 ml-5 mr-5">Portfolio</h5>
          </li>
          <li>
            <h5 className="nav-item mt-4 ml-5 mr-5">Contact</h5>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  