import React from "react";
import "./App.css"
import { Link } from "react-router-dom";


function Nav(){
    return(
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/projects">
                <li>Projects</li>
            </Link>
            <Link to="/contactme">
                <li>Contact Info</li>
            </Link>
                  
        </ul>
      </nav>
    )
}



export default Nav;

