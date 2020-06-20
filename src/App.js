import React from 'react';
import logo from './logo.svg';
import './App.css'; 

function App(props) {
  return       <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <s>Edit <code>src/App.js</code> and save to reload.</s>
          <h1>Hello Star Stuff from Jack!</h1>
          <h2>Let's learn React togather.</h2>
          <h3>Don't react just relax. You're going to have lots of fun. Cheers!!!!</h3>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </header>
    </div> 
}

export default App; // to import any component, it must first be exported.
