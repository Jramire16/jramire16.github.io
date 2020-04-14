import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


function Nav(){
    const navStyle = {
        color: 'black'
    };

    return(
      <nav>
        <h1>James Ramirez Resume</h1>
        <ul className="nav-links">
            <Link style={navStyle} to="/home">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/projects">
                <li>Projects</li>
            </Link>
            <Link style={navStyle} to="/contactme">
                <li>Contact Info</li>
            </Link>
                  
        </ul>
      </nav>
    )
}



export default Nav;

