import React from "react";
import '../App.css'
import car from "../car.jpg"
import Tiger from "../Tiger.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Projects = () => (
  
    <div className="projects">
      
      <ul> 
         <h1>Computer Science</h1>
            <a href="https://github.com/" target="_blank" className="button">My github</a>
          <h1>Artwork</h1>
            <div>
              <img src={car} className="gallery" />
              <img src={Tiger} className="gallery"/>
            </div>
      </ul>
                  
    </div>
    )




export default Projects;
