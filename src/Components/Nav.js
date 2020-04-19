import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


function Nav(){
    const navStyle = {
        color: 'black'
        
    };

    return(
        
            <nav className="a:link">
        <Link className="a:link" style={navStyle} to="/home">
            <h1>James Ramirez Resume</h1>
        </Link>     
        <ul className="nav-links">
            <Link className="button"  to="/home">
            <li>Home</li>
            </Link>
            <Link className="button" to="/about">
                <li>About</li>
            </Link>
            <Link className="button" to="/projects">
                <li>Projects</li>
            </Link>
            <Link className="button" to="/contactme">
                <li>Contact Info</li>
            </Link>
                  
        </ul>
        </nav>
        
      
      
    )
}



export default Nav;

