import React from "react";
import '../App.css'
import Profile from "../Profile.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const navStyle = {
  width: 1000
};

const Home = () => (
  
  <div className="home">
        <h1>Home Page</h1>
        <br></br> 
        <img src={Profile} style={navStyle}></img>
    </div>
   
)
    

export default Home;

