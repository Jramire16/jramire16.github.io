import React from "react";
import "./App.css"
import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contactme" component={ContactMe}/>
            <Route path="/" exact component={Home}/>
        </Switch>
        
      </div>
    </Router>
    );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
  
// }

// function Projects() {
//   return <h2>Projects</h2>;
// }

// function ContactMe(){
//   return <h2>Contact Info</h2>
// }

