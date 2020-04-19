import React from "react";
import './App.css'
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

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
            <Route path="/" component={Home}/>
        </Switch>
        
      </div>
    </Router>
    );
}

export default App
