import React from "react";
import '../App.css'
import Study from "../Study.png"
import Study2 from "../Study2.png"
import Study3 from "../Study3.png"
import Art1 from "../Art1.png"
import Art2 from "../Art2.png"
import Art3 from "../Art3.png"
import Vid1 from "../Vid1.mp4"
import Vid2 from "../Vid2.mp4"
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
              <img src={Study3} className="gallery"/>
              <img src={Art2} className="gallery"/>
              <img src={Art3} className="gallery"/>
              <img src={Study} className="gallery" />
              <img src={Study2} className="gallery"/>
              <br></br>
              <img src={Art1} className="gallery"/>
              
              
            </div>
            <br />
            <video width="900" height="500" controls>
                <source src={Vid1}></source>
                <source src={Vid2}></source>

            </video>
      </ul>
                  
    </div>
    )




export default Projects;
