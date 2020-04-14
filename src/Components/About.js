import React from "react";
import '../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const About = () => (
  <div className="about">
  <br></br>
     <p>
    My name is James Ramirez, I am a student and soon to be graduate at Lehman College with an above 3.0 GPA. 
    I will be graduating with a Computer Graphics and Imaging (CGI) B.S degree. I create animations and I also do some web programming.
    <br></br>
    <h1>Skills:</h1>
    <ul>
        <li>I have worked in coding programs such as, Java, HTML, CSS, Javascript, and REACT.</li>
        <li>I am knowledgable in animation/art programs such as, Photoshop, Illustrator, After Effects, and Cinema4D. </li>
        <li>I have basic level knowledge of MySQL.</li>
    </ul>
    <br></br>
    <h1>Education</h1>
        <p>
        Bachelor of Science Degree: Computer Graphics Imaging (CGI), Current 3 years. 
        Lehman College - 250 Bedford Park Blvd W, Bronx, NY 10468 
        <ul>
          <li>Currently maintaining an above a 3.0 GPA.</li>
        <li>Computer Science coding and Graphic Design related work. </li>
        <li>Worked on using programs/languages such as SQL, Eclipse(Java), Dreamweaver(Javascript, HTML, CSS), REACT(JSX), Photoshop, Illustrator, Cinema4D, After Effects, Adobe Premiere Pro.</li>
        </ul>
        </p>

    </p>
  </div>
)
 



export default About;
