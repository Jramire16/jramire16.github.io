import React from 'react';
import logo from './Tiger.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is James and I am going to master REACT!!
        </p>
        <a
          className="App-link"
          href="https://github.com/Jramire16"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
